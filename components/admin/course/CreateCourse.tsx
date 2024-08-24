import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import adminAPI from "@/utils/axios/admin"
import { PlusIcon } from "lucide-react"
import { FormEvent } from "react"

export function CreateCourse() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const courseName = formData.get("courseName")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const duration = formData.get("duration")?.toString() ?? "";
    const qualification = formData.get("qualification")?.toString() ?? "";
    const imageFile = formData.get("image") as File | null;

    if (!courseName || !description || !duration || !qualification || !imageFile) {
      alert("Please fill out all fields.");
      return;
    }

    const courseData = new FormData();
    courseData.append("name", courseName);
    courseData.append("description", description);
    courseData.append("duration", duration);
    courseData.append("qualification", qualification);
    courseData.append("icon", imageFile);

    try {
      await adminAPI.post("/education/courses/", courseData);
      window.location.reload();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Course</DialogTitle>
          <DialogDescription>
            Fill out the details below to create a new course.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="courseName" className="text-right">
              Course Name
            </Label>
            <Input name="courseName" id="courseName" placeholder="Enter course name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input name="description" id="description" placeholder="Enter course description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input type="file" name="image" id="image" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration
            </Label>
            <Input name="duration" id="duration" placeholder="Enter course duration" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="qualification" className="text-right">
              Qualification
            </Label>
            <Input name="qualification" id="qualification" placeholder="Enter qualification required" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Save Course</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
