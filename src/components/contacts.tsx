import React from "react";
import Image from "next/image";

export default function Contacts(){
    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-row'>
                <a href={'http://github.com/baeww'} target="_blank" rel="noopener" className="flex flex-row content-center justify-center">
                    <img src="/images/githublogo.png" alt="GitHub Logo" width={20} height={20} className='object-contain object-top mr-2' />
                </a>
                <a href={'http://linkedin.com/in/theliteralbae'} target="_blank" rel="noopener" className="flex flex-row content-center justify-center">
                    <img src="/images/linkedinlogo.png" alt="LinkedIn Logo" width={20} height={20} className='object-contain object-top mr-2' />
                </a>
                <a href={'mailto:wbae@vt.edu'} target="_blank" rel="noopener" className="flex flex-row content-center justify-center">
                    <img src="/images/emaillogo.png" alt="GitHub Logo" width={30} height={20} className='object-contain object-top mr-2' />
                </a>
            </div>
            
        </div>
    )
}