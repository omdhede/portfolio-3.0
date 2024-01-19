import Image from "next/image";
import profile from "../public/assets/profile.png"
import {CiMail, CiLocationOn} from "react-icons/ci";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoGithub  } from "react-icons/io";

import Link from "next/link";


export default function Sidebar() {
    return (
        <div
            className='container relative flex justify-center w-fit px-6 bg-[#212121] top-[4rem] rounded-xl border-[0.5px] border-[#303030]'>
            <section className='my-4 justify-center flex flex-col items-center'>
                <Image src={profile} alt='profile' width={140} height={140}
                       className='rounded-xl shadow-md shadow-white bg-[#404040] my-4'/>
                <h4 className='uppercase font-semibold text-2xl my-6'>
                    Om Mangesh Dhede
                </h4>

                <section className='p-2 px-3 bg-[#303030] rounded-xl max-w-[260px]'>
                    <h1 className='text-sm'>
                        <span className='font-bold  '>Profession:</span> Full Stack Developer <br/> <span
                        className='font-bold  '>Studying:</span> AI and DS
                    </h1>
                </section>

                {/*break*/}
                <section className='bg-[#404040] p-[0.8px] mt-6 w-[280px] rounded-3xl'></section>


                <div className='flex flex-col'>
                    <div className='flex my-4'>
                        <Link href="mailto:omdhede@gmail.com" target="_blank">
                            <CiMail size={35}
                                    className='bg-gradient-to-br from-black to-gray-600 p-1.5 rounded-lg mr-4'/>
                        </Link>
                        <section className="flex flex-col">
                            <Link href="mailto:omdhede@gmail.com" target="_blank">
                                <h1 className='text-[0.7rem] opacity-60 uppercase'>
                                    Email
                                </h1>
                            </Link>
                            <Link href="mailto:omdhede@gmail.com" target="_blank">
                                <h1 className='text-sm'>
                                    omdhede@gmail.com
                                </h1>
                            </Link>
                        </section>
                    </div>
                    <div className='flex'>
                        <Link href="https://www.google.com/maps/place/Pune" target="_blank">
                            <CiLocationOn size={35}
                                          className='bg-gradient-to-br from-black to-gray-600 p-1.5 rounded-lg mr-4'/>
                        </Link>
                        <div className="flex flex-col">
                            <Link href="https://www.google.com/maps/place/Pune" target="_blank">
                                <h1 className='text-[0.7rem] opacity-60 uppercase'>
                                    Location
                                </h1>
                            </Link>
                            <Link href="https://www.google.com/maps/place/Pune" target="_blank">
                                <h1 className='text-sm'>
                                    Pune, Maharashtra
                                </h1>
                            </Link>
                        </div>
                    </div>

                    {/*break*/}
                    <section className='bg-[#404040] p-[0.8px] my-4 w-[280px] rounded-3xl'></section>

                    <div className='flex justify-start'>
                        <button className='p-2 bg-gradient-to-br from-black to-gray-700 w-full rounded-xl flex justify-center items-center'>
                            <a href='/public/cv.pdf' download>
                                Resume <span className='pl-1 text-xl'>&rarr;</span>
                            </a>
                        </button>
                    </div>

                    {/*break*/}
                    <section className='bg-[#404040] p-[0.8px] my-4 w-[280px] rounded-3xl'></section>

                    <div className="flex mt-4 justify-center">
                        <div className='px-2'>
                            <a href="https://x.com/omdhede" target="_blank">
                                <FaSquareXTwitter size={25} className='opacity-70'/>
                            </a>
                        </div>
                        <div className='px-2'>
                            <a href="https://instagram.com/omdhede" target="_blank">
                                <IoLogoInstagram size={25} className='opacity-70'/>
                            </a>
                        </div>
                        <div className='px-2'>
                            <a href="https://github.com/omdhede" target="_blank">
                                <IoLogoGithub size={25} className='opacity-70'/>
                            </a>
                        </div>
                        <div className='px-2'>
                            <a href="https://www.linkedin.com/in/om-dhede-7b026122a/" target="_blank">
                                <FaLinkedin size={25} className='opacity-70'/>
                            </a>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}