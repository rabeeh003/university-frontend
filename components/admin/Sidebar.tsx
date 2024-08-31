import React from 'react';
import { ModeToggle } from '../togle-theme';
import { BellDot, BookDashed, GraduationCap, LayoutDashboard, LogOut, MoreHorizontalIcon, NotebookText, ReceiptText, School, Settings, Sheet, UserRoundPlus, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/redux/hooks';
import { logout } from '@/lib/redux/reduceres/admin';
import Logout from '../Logout';

const AdminSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <section className=" md:max-w-[250px] w-full md:h-full p-4 bg-muted rounded-lg flex flex-col justify-between">
      <div>
        <div className='w-full flex justify-between px-3 items-center dark:bg-muted-foreground rounded-sm'>
          <Image alt='logo' className='md:m-auto mb-2' src='/cjjc.png' width={120} height={100} />
          <div className='flex md:hidden items-center gap-2'>
            <ModeToggle />
            <Button variant={'outline'}>
              <MoreHorizontalIcon size={15} />
            </Button>
          </div>
        </div>
        <nav className='hidden md:flex flex-col items-end md:h-[72vh] overflow-auto scrollbar-hide'>
          <Link href='/admin' className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <LayoutDashboard size={20} className='flex justify-center items-center mr-2' />
            <span>Dashboard</span>
          </Link>
          <Link href={'/admin/students'} className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <Users size={20} className='flex justify-center items-center mr-2' />
            <span>Students</span>
          </Link>
          <Link href={'/admin/colleges'} className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <School size={20} className='flex justify-center items-center mr-2' />
            <span>J-Colleges</span>
          </Link>
          <div className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <GraduationCap size={20} className='flex justify-center items-center mr-2' />
            <span>Education</span>
          </div>
          <Link href="/admin/cdcs" className='flex items-center w-[90%] bg-background p-2 rounded-sm mb-1'>
            <NotebookText size={20} className='flex justify-center items-center mr-2' />
            <span>Course</span>
          </Link>
          <Link href="/admin/books" className='flex items-center w-[90%] bg-background p-2 rounded-sm mb-1'>
            <BookDashed size={20} className='flex justify-center items-center mr-2' />
            <span>Books</span>
          </Link>
          <div className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <GraduationCap size={20} className='flex justify-center items-center mr-2' />
            <span>Exam</span>
          </div>
          <Link href="/admin/cam" className='flex items-center w-[90%] bg-background p-2 rounded-sm mb-1'>
            <ReceiptText size={20} className='flex justify-center items-center mr-2' />
            <span>Centers & Manager</span>
          </Link>
          <Link href="/admin/result" className='flex items-center w-[90%] bg-background p-2 rounded-sm mb-1'>
            <Sheet size={20} className='flex justify-center items-center mr-2' />
            <span>results</span>
          </Link>
          <Link href='/admin/admition' className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <UserRoundPlus size={20} className='flex justify-center items-center mr-2' />
            <span>Admition</span>
          </Link>
          <Link href='/admin/notify' className='flex items-center w-full bg-background p-2 rounded-sm mb-1'>
            <BellDot size={20} className='flex justify-center items-center mr-2' />
            <span>Notification</span>
          </Link>
        </nav>
      </div>
      <div className='hidden md:flex justify-between'>
        <Button variant={'outline'}>
          <Settings size={15} />
        </Button>
        <Logout userType='admin' nextUrl='/auth/admin' />
        <ModeToggle />
      </div>
    </section>
  );
};

export default AdminSidebar;
