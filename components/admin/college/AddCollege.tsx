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
import { PlusIcon } from "lucide-react"

export function AddCollege() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>
            Add College
          </DialogTitle>
          <DialogDescription>
            Fill out the details below to add a new college.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col">
            <Label htmlFor="college" className="pb-3">
              College name
            </Label>
            <Input id="college" placeholder="Enter college full name" className="" />
          </div>
          <div className="md:flex justify-between">
            <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
              <Label htmlFor="username" className="">
                Username
              </Label>
              <Input id="username" placeholder="Enter username" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center justify-betweenpb-2 gap-4">
              <Label htmlFor="password" >
                Password
              </Label>
              <Input type="password" id="password" placeholder="Enter password" className="col-span-3" />
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
              <Label htmlFor="phone" className="">
                Phone
              </Label>
              <Input id="username" placeholder="Enter phone" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center justify-between gap-2">
              <Label htmlFor="place">
                Place
              </Label>
              <Input id="palce" placeholder="Enter place" className="col-span-3" />
            </div>
          </div>
          <div className="md:flex justify-between">
            <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
              <Label htmlFor="panchayath" className="">
                Panchayath
              </Label>
              <Input id="panchayath" placeholder="ex: chelembra panchayath" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="district" className="text-right">
              District
              </Label>
              <Input id="district" placeholder="Enter district" className="col-span-3" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add book</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
