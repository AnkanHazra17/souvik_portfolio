import LeftSideBar from "@/components/LeftSideBar";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUVIK | Portfolio",
  description: "A minimalistic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen relative">
        <div className="flex bg-black">
            <LeftSideBar></LeftSideBar>
            <section className="flex min-h-screen flex-1 flex-col sm:px-14">
                <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                    <div className="flex h-16 items-center justify-between md:hidden">
                      {/* Logo */}
                        <div className="flex items-center gap-1 cursor-pointer">
                          <div className=' w-16 h-16 bg-white-200 rounded-full'></div>
                          <div className='flex flex-col'>
                              <h1 className='text-lg font-bold text-white'>Souvik Maiti</h1>
                              <p className='text-sm text-white-100'>SDE</p>
                          </div>
                        </div>

                        {/* Mobile nav */}
                        <MobileNav></MobileNav>
                    </div>
                    <div className="flex flex-col md:pb-14">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}