import React from "react";
import Navigation from "@/components/navigation";
import Contacts from "@/components/contacts";
import Image from "next/image";

interface HeaderProps {
    borderColor?: string;
}

export default function Header({ borderColor = '#00005F' }: HeaderProps){
    return(
        <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto'>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <img 
                        src='/images/pfp.jpg' 
                        alt='William Bae' 
                        width={200} 
                        height={250} 
                        className='mb-5 object-contain object-top mr-2 border-solid border-4' 
                        style={{ borderColor: borderColor }}
                    />
                    {/* <img src='images/pfpoutline.png' width={480} height={600} className='object-fill' /> */}
                    
                </div>
                <h1 className='text-5xl subpixel-antialiased tracking-wide text-center'>William Bae</h1>
                <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>CS Major @ Virginia Tech</h2>
                <Contacts></Contacts>
            </div>
            <Navigation></Navigation>
        </div>
    )
}