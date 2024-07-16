"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import DropdownSearch from './DropDownSearch';


const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  // Add more courses as needed
];

export function CreateDepartment() {
  const [selectedCourse, setSelectedCourse] = useState<{ id: number; name: string } | null>(null);
  const handleDropdownChange = (selectedOption: { id: number; name: string }) => {
    setSelectedCourse(selectedOption);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Department</DialogTitle>
          <DialogDescription>
            Fill out the details below to create a new department.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="departmentName" className="text-right">
              Department Name
            </Label>
            <Input id="departmentName" placeholder="Enter department name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" placeholder="Enter department description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <div className="col-span-3">
            <DropdownSearch options={courses} onChange={handleDropdownChange} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
