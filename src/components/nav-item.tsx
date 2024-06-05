import React from "react";
import setActiveSection from "@/components/navigation";
import Link from "next/link";

// Define the props interface
interface NavItemProps {
    href: string;
    num: number;
    name: string;
    active: boolean;
    click: (section: string) => void;
}

function NavItem({ href, num, name, active, click}: NavItemProps) {
    return (

        <Link href={href} className='flex flex-row py-3 items-center group ml-10' onClick={() => click(name)}>
            <div className={active ? 'mr-4 text-on-background transition-all' : 'mr-4 transition-all group-hover:text-border-100'}>
                {num}
            </div>
            <div className={active ? 'w-16 h-0.5 mr-4 transition-all bg-on-background' : 'w-8 h-0.5 mr-4 transition-all group-hover:w-16 group-hover:bg-border-100'} />
            <div className={active ? 'transition-all text-on-background' : 'transition-all group-hover:text-border-100'}>
                {name}
            </div>
        </Link>
    );
}

export default NavItem;