import Hero from "@/app/ui_components/Hero";
import ComingSoon from "@/app/ui_components/ComingSoon";
import LatestStories from "@/app/ui_components/LatestStories";

export default function Home() {
  return (
    <main className="container mx-auto space-y-20 py-32">
      <Hero />
        <LatestStories/>
        <ComingSoon />
    </main>
  );
}
