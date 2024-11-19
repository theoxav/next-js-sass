'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ButtonSignout() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/');
  }
  const handleSignout = () => {
    signOut();
    router.push('/');
  };

  return (
    <div className="flex items-center justify-end mb-2 mt-2 lg:mt-0 p-3">
      <Button
        onClick={handleSignout}
        className="bg-orange-500 hover:bg-orange-600 text-white"
      >
        <LogOut />
      </Button>
    </div>
  );
}
