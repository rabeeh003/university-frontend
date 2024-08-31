import { AdmitionSection } from "@/components/landing/Admintion";
import { CollegeSection } from "@/components/landing/CollegeSection";
import { CourseList } from "@/components/landing/CourseList";
import { DetailsSection } from "@/components/landing/DetailsSection";
import { HeroSection } from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  const courseData = [
    {course_name : 'Secondary', des:'This course for students thire completed 5th on samasth madrasa and 7th on school. the age is must graterthan or equal to 13. this course is 8 year course. we provide an islamic cultiuar and school assistance for heigher secondary, seconday, and degree support. we premote self study and build islamic habits for personal development.'},
    {course_name : 'Heigher Secondary', des:'This course for students thire completed 5th on samasth madrasa and 10th on school. this course is 6 year course. we provide an islamic cultiuar and school assistance for heigher secondary, and degree support. we premote self study and build islamic habits for personal development.'}
  ] 
  return (
    <main className="bg-black snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
      <div className="absolute top-0 w-full bg-neutral-200 bg-opacity-95 z-50 shadow-md shadow-neutral-400">
            <Navbar/>
            </div>
      <section className="snap-start h-screen">
        <HeroSection />
      </section>
      <section className="snap-start pt-20 ">
        <h2 className="text-center text-neutral-200 mb-8 font-mono font-bold text-5xl">Courses</h2>
        <div className="flex flex-wrap gap-20 justify-center align-middle pb-32">
          {courseData.map(data => (
          <CourseList key={data.course_name} data={data} />
          ))}
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
