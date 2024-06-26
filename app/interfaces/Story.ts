import Chapter from "@/app/interfaces/Chapter";

interface Story{
    id:number;
    title:string;
    description:string;
    datePublished:string;
    author:string;
    content:Array<Chapter>;
}
export default  Story;