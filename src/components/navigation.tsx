'use client'

import React, { useState } from "react";
import NavItem from "./nav-item";

export default function Navigation(){
    const [activeSection, setActiveSection] = useState('');


    return(
        // <div className='lg:fixed h-screen basis-1.5/4 flex flex-col justify-between pb-48 self-center lg:self-auto'>]
        <div className = ''>
            <NavItem active={activeSection === 'about' ? true : false} href='about' num={1} name="ABOUT" click={() => setActiveSection('about')}></NavItem>
            <NavItem active={activeSection === 'experience' ? true : false} href='experience' num={2} name="EXPERIENCE" click={() => setActiveSection('experience')}></NavItem>
            <NavItem active={activeSection === 'projects' ? true : false} href='projects' num={3} name="PROJECTS" click={() => setActiveSection('projects')}></NavItem>
            <NavItem active={activeSection === 'other' ? true : false} href='other' num={4} name="OTHER" click={() => setActiveSection('other')}></NavItem>

        </div>
    )
}