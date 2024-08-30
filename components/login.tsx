'use client';
import React, { useEffect } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import adminAPI from '@/utils/axios/admin';
import axios from 'axios';
import { baseURL } from '@/utils/constValue';
import { getCookie } from '@/utils/cookie';

interface LoginProps {
  heading: string;
  quote: string;
  loginRoute: string;
  nextRout: string;
}

const Login: React.FC<LoginProps> = ({ heading, quote, loginRoute, nextRout }) => {
  
  if (loginRoute === '/account/admin/login/' && getCookie('admin')) {
    window.location.href = '/admin';
  }
  if (loginRoute === '/account/login/college/' && getCookie('college')) {
    window.location.href = '/college';
  }

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const handileSubmit = async () => {
    setError('')
    console.log({ username, password });

    if (username === '' || password === '') {
      setError('Please enter your username and password');
      return;
    }
    axios.post(baseURL+loginRoute, { username, password },
      { withCredentials: true })
      .then((res) => {
        console.log(res.data, 'token data');
        window.location.href = nextRout ;
      }).catch((err) => {
        setError("username or password is wrong");
        return;
      })
  }
  return (
    <section className="flex min-h-screen items-center justify-center text-white">
      <div className="flex w-full max-w-4xl">
        <aside className="hidden md:flex flex-col justify-between w-1/2 bg-gray-800  p-8 rounded-l-md">
          <p className="text-2xl font-bold mb-4">JJC Online</p>
          <div>
            <p className="mt-auto text-md mb-4">{quote}</p>
            <p className="text-sm">Muhammed nabi (s)</p>
          </div>
        </aside>
        <aside className="m-auto max-w-[90%] md:w-1/2 bg-black p-8 rounded-sm md:rounded-none md:rounded-r-md">
          <p className="text-2xl font-bold mb-4">{heading}</p>
          <p >Enter your username and password</p>
          <div className='pt-2 grid gap-3'>
            <Input placeholder="username" className='text-foreground' type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" className='text-foreground' type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button className="mt-4" onClick={() => handileSubmit()}>Sign In</Button>
            <p className='text-red-500 text-sm'>{error}</p>
          </div>
          <p className="text-sm mt-6">
            By clicking continue, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
        </aside>
      </div>
    </section>
  );
};


export default Login;
