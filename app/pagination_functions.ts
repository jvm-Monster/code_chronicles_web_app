import {router} from "next/client";
import {useFetch} from "@/app/usefetch";
import Story from "@/app/interfaces/Story";
import {useRouter} from "next/navigation";

/*export const useCustomRouter = ()=>{
    return useRouter();
}*/
export const storiesPerPage = 5;
export function handleNextPage ({start,end,f}:{start:number, end:number,f:(nS:number,nE:number)=>void}){
    const newStart = start + storiesPerPage; // Calculate new start index for the next page
    const newEnd = end + storiesPerPage; // Calculate new end index for the next page
   /* setStart(newStart); // Update start state with the new start index
    setEnd(newEnd); // Update end state with the new end index*/
    f(newStart,newEnd);

};

export function handlePreviousPage ({start,end,f}:{start:number, end:number,f:(nS:number,nE:number)=>void}) {
    if (start > 0) {
        const newStart = Math.max(start - storiesPerPage, 0); // Calculate new start index for the previous page, ensuring it doesn't go below 0
        const newEnd = end - storiesPerPage; // Calculate new end index for the previous page
        /*setStart(newStart); // Update start state with the new start index
        setEnd(newEnd); // Update end state with the new end index*/
        f(newStart,newEnd);// Navigate to the previous page with updated parameters
    }
}

export const  getCurrentPaginationPage = ({start}:{start:number})=>{
    return (start / storiesPerPage) + 1
}

export const useFetchStoriesPagination = ({start,end}:{start:number,end:number})=>{
    const { loading, error, data } = useFetch<Story[]>(`stories?start=${start}&end=${end}`);
    return {loading,error,data};
}




