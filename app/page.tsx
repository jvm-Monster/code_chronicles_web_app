import Hero from "@/app/ui_components/Hero";
import ComingSoon from "@/app/ui_components/ComingSoon";
import Story from "@/app/interfaces/Story";
import LatestStories from "@/app/ui_components/LatestStories";
import {next} from "sucrase/dist/types/parser/tokenizer";

async function getData() {
  try{
    const res = await fetch(`http://172.28.151.25:8089/code-chronicles/api/stories?start=0&&end=4`,{cache:'no-cache'});

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return [];
    }

    return res.json();
  }catch(error){
    console.log("Failed to fetch data");
  }

}
export default async function Home (){
  const data:Story[] =await getData();

  return (
    <main className="container mx-auto space-y-20 py-32">
      <Hero />
      {data&&<LatestStories latestStories={data}/>}
        <ComingSoon />
    </main>
  );
}

