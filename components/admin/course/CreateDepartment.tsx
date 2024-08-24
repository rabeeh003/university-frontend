"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import { RootState } from "@/lib/redux/store";
import { useAppSelector } from "@/lib/redux/hooks";
import adminAPI from "@/utils/axios/admin";

interface Course {
  id: number;
  name: string;
  icon: string;
  qualification: string;
  duration: number;
  description: string;
  url: string;
}

export function CreateDepartment() {
  const { courses } = useAppSelector(
    (state: RootState) => state.admin
  );
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [department, setDepartment] = useState("");
  const [des, setDes] = useState("");
  const handleDropdownChange = (selectedOption: Course | null) => {
    setSelectedCourse(selectedOption);
  };

  const submit = () => {
    if (department && des && selectedCourse) {
      console.log(department, des, selectedCourse);
      const formData = new FormData();
      formData.append("name", department);
      formData.append("description", des);
      formData.append("course", selectedCourse.url);
      adminAPI.post("/education/departments/", formData).then(res => { console.log(res.data) }).catch(err => console.log(err));
    } else {
      alert("Please fill out all fields.");
    }
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
            <Input id="departmentName" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter department name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value={des} onChange={(e) => setDes(e.target.value)} placeholder="Enter department description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="course" className="text-right">
              Course
            </Label>
            <div className="col-span-3">
              <DropdownSearch options={courses || []} onChange={handleDropdownChange} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button onClick={submit}>Create</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
