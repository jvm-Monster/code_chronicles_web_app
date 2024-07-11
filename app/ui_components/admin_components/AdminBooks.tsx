'use client';
import React, {useState} from "react";
import Story from "@/app/interfaces/Story";
import StoryCard from "@/app/ui_components/StoryCard";
import {useFetch} from "@/app/usefetch";
import {useRouter, useSearchParams} from "next/navigation";
import {getCurrentPaginationPage, handleNextPage, handlePreviousPage} from "@/app/pagination_functions";
import {StoryGrid} from "@/app/ui_components/StoryGrid";

const AdminBooks = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state with URL params or default values
    const initialStart = parseInt(searchParams.get('start') || "0");
    const initialEnd = parseInt(searchParams.get('end') || "5");

    const [start, setStart] = useState(initialStart);
    const [end, setEnd] = useState(initialEnd);

    return (
        <>
            <StoryGrid  handlePreviousPage={() => {
                handlePreviousPage({
                    start: start, end: end, f: (ns: number, ne: number) => {
                        setStart(ns); // Update start state with the new start index
                        setEnd(ne); // Update end state with the new end index
                        router.push(`/admin?start=${ns}&end=${ne}`);
                    }
                })
            }} handleNextPage={() => {
                handleNextPage({
                    start: start, end: end, f: (ns: number, ne: number) => {
                        setStart(ns); // Update start state with the new start index
                        setEnd(ne); // Update end state with the new end index
                        router.push(`/admin?start=${ns}&end=${ne}`); // Navigate to the next page with updated parameters
                    }
                })
            }} start={start} query={`admin?start=${start}&end=${end}`}/>
        </>
    );
};

export default AdminBooks;
