import React, { createContext, ReactNode, useState } from "react";

export const PagePaginationContext = createContext({ page: 1, changePage: () => {} });

export const PagePaginationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [page, setPage] = useState(1);

    const changePage = () => {
        console.log(`setting page up ${page}`);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <PagePaginationContext.Provider value={{ page, changePage }}>
            {children}
        </PagePaginationContext.Provider>
    );
};
