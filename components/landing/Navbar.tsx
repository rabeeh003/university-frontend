import Image from 'next/image'
import React from 'react'
import { DropdownMenu, DropdownMenuContent } from '../ui/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { UserCircle2 } from 'lucide-react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full h-16 flex justify-around items-center'>
      <Image src='/cjjc.png' alt='logo' width={200} height={150} />
      <div className='flex gap-3 font-semibold text-neutral-800 font-sans text-md'>
        <ul className='hidden md:flex gap-1 cursor-pointer'>
          <li className='hover:text-slate-700 hover:bg-neutral-200 px-2 py-1 rounded-sm'>Home</li>
          <li className='hover:text-slate-700 hover:bg-neutral-200 px-2 py-1 rounded-sm'>Notification</li>
          <li className='hover:text-slate-700 hover:bg-neutral-200 px-2 py-1 rounded-sm'>Updates</li>
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex gap-1 cursor-pointer hover:text-slate-700 hover:bg-neutral-200 px-2 py-1 rounded-sm'>
            Login <UserCircle2 />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ul className='grid cursor-pointer gap-2 p-3'>
              <Link href='/student'>Student</Link>
              <Link href='/teacher'>Teacher</Link>
              <Link href='/college'>College</Link>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
