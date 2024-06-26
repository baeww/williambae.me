import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import BirdsBackground from "@/components/birds";


export const metadata: Metadata = {
  title: "William Bae",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <div className='position: absolute w-full h-full -z-10'> 
        <BirdsBackground></BirdsBackground>
      </div>
      <main className="flex min-h-screen flex-col items-center py-20 px-6 lg:px-24">
        <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
          <Header></Header>
          <div className='lg:pl-[45%]'>
            {children}
          </div>
        </div>
      </main>
      </body>
    </html>
  );
}
