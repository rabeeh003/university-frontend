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

export function AddBook() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
          Add Book
          </DialogTitle>
          <DialogDescription>
            Fill out the details below to add a new book.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="book" className="text-right">
              Book
            </Label>
            <Input id="book" placeholder="Enter book name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="auther" className="text-right">
              Auther
            </Label>
            <Input id="auther" placeholder="Enter auther name" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add book</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
