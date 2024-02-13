import {projectsData} from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import {useRef} from "react";


type ProjectProps = (typeof projectsData)[number]


export default function Project({title, description, link, image, tags}: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);

    return (
        <div className='max-w-md flex flex-row items-start justify-center my-8 relative top-4 mx-6' ref={ref}>
                <div className=' '>
                    <Link href={link} target="_blank">
                        <div className=' mb-4 rounded-xl h-[14rem]'>
                            <Image src={image} alt='' className='rounded-xl border-4 border-gray-700 ' width="400"/>
                        </div>

                        <div className='flex flex-col my-6'>
                            <p className='text-2xl font-semibold my-2'>
                                {title}
                            </p>
                            <p className='text-justify text-sm opacity-60 font-light'>{description}</p>
                        </div>
                        <div>
                            <ul className="flex flex-wrap my-4 gap-2 sm:mt-auto">
                                {tags.map((tag, index) => (
                                    <li
                                        className="bg-gradient-to-br from-black to-gray-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </Link>
                </div>
        </div>
    )
}