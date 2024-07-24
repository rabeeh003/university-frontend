import React from "react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FilterIcon, PrinterIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DropdownSearch from "./DropDownSearch"

export function FilterStudent() {
  const options = [
    { id: 1, name: "College 1" },
    { id: 2, name: "College 2" },
    { id: 3, name: "College 3" },
    { id: 4, name: "College 4" },
    { id: 5, name: "College 5" },
    { id: 6, name: "College 6" },
    { id: 7, name: "College 7" },
    { id: 8, name: "College 8" },
    { id: 9, name: "College 9" },
    { id: 10, name: "College 10" },
    { id: 11, name: "College 11" },
    { id: 12, name: "College 12" },
    { id: 13, name: "College 13" },
    { id: 14, name: "College 14" }
  ]
  const [selectedCollege, setSelectedCollege] = React.useState<{ id: number; name: string } | null>(null);
  const handleDropdownChange = (selectedOption: { id: number; name: string }) => {
    setSelectedCollege(selectedOption);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FilterIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-full md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>
            Studnets filter
          </DialogTitle>
        </DialogHeader>
        <div className="sm:flex items-center gap-2 justify-between">
            <DropdownSearch options={options} onChange={handleDropdownChange} />
          <div className="flex mt-1 gap-1 justify-between">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Class 1</SelectItem>
                <SelectItem value="2">Class 2</SelectItem>
                <SelectItem value="3">Class 3</SelectItem>
                <SelectItem value="4">Class 4</SelectItem>
                <SelectItem value="5">Class 5</SelectItem>
                <SelectItem value="6">Class 6</SelectItem>
                <SelectItem value="7">Class 7</SelectItem>
                <SelectItem value="8">Class 8</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="5">2020</SelectItem>
                <SelectItem value="6">2019</SelectItem>
                <SelectItem value="7">2018</SelectItem>
                <SelectItem value="8">2017</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <PrinterIcon />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
