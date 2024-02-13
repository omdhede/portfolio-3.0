import React from 'react';

type SkillProps = {
    name: string;
    percentage: number;
}

const Skill: React.FC<SkillProps> = ({name, percentage}) => {
    return (
        <div className="w-full">
            <p className='mr-6 pt-6 pb-1'>{name}{" - "}<span className='text-sm opacity-80'>{percentage}%</span></p>
            <div className="w-full bg-[#93B1A6] rounded-full h-3">
                <div style={{width: `${percentage}%`}} className="bg-[#5C8374] h-full rounded-full"></div>
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <div className='bg-[#] w-fit pt-4 pb-4 m-6 rounded-2xl pr-2'>
            <div className=' scrollbar-thin scrollbar-track-transparent  '>
                <div className=' overflow-y-scroll scrollbar-thin scrollbar-thumb-[#183D3D] scrollbar-thumb-rounded-xl h-[30rem]'>
                    <div className='mr-20'>
                        <div className='w-[30rem] h-[40rem] overflow-hidden ml-6'>
                            <Skill name="JavaScript" percentage={80}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="React" percentage={70}/>
                            <Skill name="TypeScript" percentage={60}/>
                        </div>
                        {/*// Add more skills as needed*/}
                    </div>
                </div>
            </div>
        </div>
    )
}