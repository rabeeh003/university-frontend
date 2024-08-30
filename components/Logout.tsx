import React, { useState } from 'react';
import { Button } from '@/components/ui/button';import { LogOut } from 'lucide-react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogTrigger, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog';
import axios from 'axios';
import adminAPI from '@/utils/axios/admin';


function Logout({ userType, nextUrl }: { userType: string, nextUrl: string }) {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await adminAPI.post('account/logout/', {
        user_type: userType,
      }, {
        withCredentials: true,
      });
      console.log(response.data);
      window.location.href = nextUrl;
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <LogOut size={15} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant="destructive" onClick={handleLogout}>Logout</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default Logout;
