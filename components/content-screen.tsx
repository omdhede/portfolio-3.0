"use client"

import React from 'react';

import {useState} from 'react';
import About from "../components/about"
import Projects from "../components/projects";
import Certifications from "../components/certifications";
import Contact from "../components/contact";
import Skills from "../components/skills";

export default function Content() {
    const [activeSection, setActiveSection] = useState('Projects');

    const sections = ['Projects', 'Skills', 'Certifications', 'About Me', 'Contact'];

    return (
        <div
            className='bg-[#212121] w-[65rem] relative top-[4rem] rounded-xl ml-6 border-[0.5px] border-[#303030] '>
            <section className=' flex justify-end items-center'>
                <section className='absolute left-[2rem] top-6'>
                    <h1 className='text-3xl font-semibold opacity-85'>
                        {activeSection}
                    </h1>
                    <section className='bg-[#3AA6B9] p-[2.5px] relative top-4 w-[3rem] rounded-3xl'></section>
                </section>
                <div
                    className='ml-4 bg-[#303030] w-[40rem] py-5 rounded-tr-xl rounded-bl-xl border-[0.5px] border-[#303030]'>
                    <nav className="flex justify-end items-center">
                        {sections.map(section => (
                            <ul
                                key={section}
                                className={`${section === activeSection ? 'text-[#3AA6B9] font-bold' : ' text-white '} mr-11 cursor-pointer font-semibold opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out`}
                                onClick={() => setActiveSection(section)}
                            >
                                {section}
                            </ul>
                        ))}
                    </nav>
                </div>
            </section>
            <div
                className=' overflow-x-scroll scrollbar-thumb-gray-400 scrollbar-thin scrollbar-thumb-rounded-3xl scrollbar-track-rounded-3xl mx-6 '>
                <div className='w-[100rem] flex flex-row'>
                    {activeSection === 'Projects' && <Projects/>}
                </div>
            </div>
            <div className='relative my-6 '>
                {activeSection === 'About Me' && <About/>}
            </div>

            {activeSection === 'Skills' && <Skills/>}

            {activeSection === 'Certifications' && <Certifications/>}
            {activeSection === 'Contact' && <Contact/>}
        </div>
    )
}