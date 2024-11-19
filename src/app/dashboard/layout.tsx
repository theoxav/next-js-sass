import ButtonSignout from '@/components/ButtonSignout';
import DashboardNav from '@/components/dashboard/DashboardNav';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1200px] mx-auto md:flex md:items-center md:gap-4 h-screen w-full mt-2 p-2">
      <DashboardNav />
      <div className="w-full h-full">
        <ButtonSignout />
        {children}
        <ToastContainer />
      </div>
    </section>
  );
}
