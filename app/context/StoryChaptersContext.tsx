import React, {ReactNode} from 'react';
import { createContext, useContext, useState } from 'react';
import Chapter from "@/app/interfaces/Chapter";

interface Chapters {
    chapters: Array<Chapter>,
    setChapters: (chapters: Array<Chapter>) => void;
}

const StoryChaptersContext = createContext<Chapters | null>(null);

const StoryChaptersContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [chapters, setChapters] = useState<Chapter[]>([]);
    return (
        <StoryChaptersContext.Provider value={{ chapters, setChapters }}>
            {children}
        </StoryChaptersContext.Provider>
    );
};

export {StoryChaptersContextProvider,StoryChaptersContext}
