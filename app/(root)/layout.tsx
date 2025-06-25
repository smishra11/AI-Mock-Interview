import LogoutButton from '@/components/LogoutButton';
import {
  isAuthenticated,
  removeSessionCookie,
} from '@/lib/actions/auth.action';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className='root-layout'>
      <nav className='flex justify-between items-center'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='logo' width={38} height={32} />
          <h2 className='text-primary-100'>IntPrep</h2>
        </Link>
        {/* <div
          className='bg-white h-11 w-11 flex justify-center items-center rounded-full cursor-pointer'
          onClick={handleLogOut}
        >
          <Image src='/user.png' alt='profile' width={38} height={38} />
        </div> */}
        <LogoutButton />
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
