'use client';

import Link from 'next/link';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import { ModeToggle as ThemeToggle } from '@/components/ThemeToggle';

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src={Logo}
            alt="Logo du sass"
            className="w-12 h-12"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
