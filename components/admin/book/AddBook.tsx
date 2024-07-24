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
import adminAPI from "@/utils/axios/admin";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export function AddBook() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const book = formData.get("book")?.toString() ?? "";
    const author = formData.get("author")?.toString() ?? "";

    if (book === "" || author === "") {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await adminAPI.post("/education/subjects/", { book, author });
      alert("Book added successfully!");
      e.currentTarget.reset();
      window.location.reload();
    } catch (error) {
      alert("Failed to add book. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
          <DialogDescription>
            Fill out the details below to add a new book.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="book" className="text-right">
              Book
            </Label>
            <Input id="book" name="book" placeholder="Enter book name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Author
            </Label>
            <Input id="author" name="author" placeholder="Enter author name" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit">Add book</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddBook;