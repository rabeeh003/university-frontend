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
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react";

const departments = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
  { id: 3, name: "Department 3" },
  // Add more departments as needed
];

const semesters = Array.from({ length: 20 }, (_, i) => i + 1);

export function CreateSem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Semester</DialogTitle>
          <DialogDescription>
            Fill out the details below to create a new semester.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="semesterName" className="text-right">
              Semester Name
            </Label>
            <select id="semesterName" className="col-span-3 p-2 border rounded-md">
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="department" className="text-right">
              Department
            </Label>
            <select id="department" className="col-span-3 p-2 border rounded-md">
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Semester</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
