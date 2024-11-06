import type { Metadata } from "next";
import "@/assets/style/globals.css";
import localFont from "next/font/local";
import Header from '@/components/core/Header'
import Sidebar from '@/components/core/Sidebar'
import Footer from '@/components/core/Footer'



const mainFont = localFont({ src: "../assets/fonts/IRANSans-web.woff"});


export const metadata: Metadata = {
  title: "Metronic App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${mainFont.style.fontFamily}`}
      >
         <div className="size-full justify-center items-start inline-flex">
      <div className="grow shrink basis-0  bg-[#f5f5f5] dark:bg-[#181818] flex-col justify-between items-center inline-flex min-h-lvh">
        <Header/>
        <div className="px-20 py-15 justify-center items-center my-16 size-full mx-10" >{children}</div>
        <Footer/>
      </div>
      <Sidebar/>
    </div>
        
      </body>
    </html>
  );
}
