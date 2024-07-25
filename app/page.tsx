import { AdmitionSection } from "@/components/landing/Admintion";
import { CourseList } from "@/components/landing/CourseList";
import { DetailsSection } from "@/components/landing/DetailsSection";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <h2 className="text-center text-neutral-200 mb-8 font-mono font-bold text-5xl" >Courses</h2>
      <div className="flex flex-wrap gap-20 justify-center align-middle pb-32" >
        <CourseList />
        <CourseList />
      </div>
      <AdmitionSection/>
      <DetailsSection/>
    </main>
  );
}
