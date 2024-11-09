import './dist/styles/main.css';
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


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
            {children}
        </div>
        
      </body>
    </html>
  );
}
