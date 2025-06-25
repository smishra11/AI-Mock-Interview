'use client';

import { removeSessionCookie } from '@/lib/actions/auth.action';
import Image from 'next/image';

export default function LogoutButton() {
  const handleLogOut = async () => {
    await removeSessionCookie();
  };

  return (
    <div
      className='bg-white h-11 w-11 flex justify-center items-center rounded-full cursor-pointer'
      onClick={handleLogOut}
    >
      <Image src='/user.png' alt='profile' width={38} height={38} />
    </div>
  );
}
