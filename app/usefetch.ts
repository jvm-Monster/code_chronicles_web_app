'use client';
import { useState, useEffect } from "react";

export interface ResponseType<T> {
    data: T | null;
    error: boolean;
    loading: boolean;
}
const baseUrl = "http://localhost:8081/code-chronicles/api/";
const useFetch = <T,>(attachedUrl: string): ResponseType<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}${attachedUrl}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    if (err.name !== 'AbortError') {
                        setError(true);
                    }
                } else {
                    console.error("Unexpected error", err);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to abort the fetch request if the component unmounts
        return () => {
            abortController.abort();
        };
    }, [attachedUrl]);

    return { data, error, loading };
};

export {useFetch, baseUrl};

