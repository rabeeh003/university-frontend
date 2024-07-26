import { AdmitionSection } from "@/components/landing/Admintion";
import { CollegeSection } from "@/components/landing/CollegeSection";
import { CourseList } from "@/components/landing/CourseList";
import { DetailsSection } from "@/components/landing/DetailsSection";
import { HeroSection } from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="bg-black snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section className="snap-start h-screen">
        <HeroSection />
      </section>
      <section className="snap-center ">
        <h2 className="text-center text-neutral-200 mb-8 font-mono font-bold text-5xl">Courses</h2>
        <div className="flex flex-wrap gap-20 justify-center align-middle pb-32">
          <CourseList />
          <CourseList />
        </div>
      </section>
      <section className="snap-center">
        <AdmitionSection />
      </section>
      <section className="snap-start h-screen">
        <h2 className="text-center text-neutral-200 pt-20 pb-2 font-mono font-bold text-5xl">Features</h2>
        <DetailsSection />
      </section>
      <section className="snap-center">
      <h2 className="text-center text-neutral-200 pt-20 pb-2 font-mono font-bold text-5xl">Colleges</h2>
        <CollegeSection />
      </section>
    </main>
  );
}
