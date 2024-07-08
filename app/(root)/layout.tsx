import LeftSideBar from "@/components/LeftSideBar";
import MobileNav from "@/components/MobileNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

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
                    <div className="flex py-2 h-16 items-center justify-between md:hidden">
                      {/* Logo */}
                        <div className="flex items-center gap-3 cursor-pointer">
                          <Image
                            src="/images/souvik_profile.jpg"
                            alt="profile"
                            width={40}
                            height={40}
                            className="aspect-square rounded-full"
                          ></Image>
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