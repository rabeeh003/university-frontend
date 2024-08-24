"use client";
import { useState, FormEvent } from "react";
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
import adminAPI from "@/utils/axios/admin";
import { PlusIcon } from "lucide-react";
import { useRouter } from 'next/navigation'; 

export function AddCollege() {
  const [collegeName, setCollegeName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [panchayath, setPanchayath] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log('function started');
    

    if (!collegeName || !username || !password || !email || !phone || !place || !panchayath || !district) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await adminAPI.post("/account/register/college/", {
        first_name: collegeName,
        username,
        password,
        email,
        phone,
        place,
        panchayath,
        district,
      });
      setLoading(false);
      router.push("/admin/college");
    } catch (error) {
      setError("Error adding college. Please try again.");
      console.error("Error adding college:", error);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlusIcon className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Add College</DialogTitle>
          <DialogDescription>
            Fill out the details below to add a new college.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col">
              <Label htmlFor="collegeName" className="pb-3">
                College name
              </Label>
              <Input
                name="collegeName"
                id="collegeName"
                placeholder="Enter college full name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <div className="md:flex justify-between">
              <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center justify-between pb-2 gap-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center justify-between gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  name="phone"
                  type="text"
                  id="phone"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
                <Label htmlFor="place">Place</Label>
                <Input
                  name="place"
                  id="place"
                  placeholder="Enter place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="grid grid-cols-4 items-center justify-between gap-2 pb-2 md:pr-2">
                <Label htmlFor="panchayath">Panchayath</Label>
                <Input
                  name="panchayath"
                  id="panchayath"
                  placeholder="ex: chelembra panchayath"
                  value={panchayath}
                  onChange={(e) => setPanchayath(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="district">District</Label>
                <Input
                  name="district"
                  id="district"
                  placeholder="Enter district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add College"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
