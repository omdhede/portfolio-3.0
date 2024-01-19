import innovate3D_temp from "../public/assets/projects-temp/innovate-3d.png"
import mental_fitness from "../public/assets/projects-temp/mental-tracker.png"
// import private_discord from "../public/assets/projects-temp/private-discord.png"

export const projectsData = [
    {
        title: "Innovate 3D",
        description: "Innovate 3D is an idea of creating a social media platform for the 3D-model creators to showcase their ideas and skills.",
        link: "https://github.com/omdhede/Innovate3D.git",
        image: innovate3D_temp,
        tags: [
            "Next.js",
            "React",
            "Typescript",
            "Framer Motion",
            "Tailwind CSS",
            "Vercel",
            "Git",
        ],
    },
    {
        title: "AI Mental Fitness Application",
        description: "I made this project in an internship under IBM SkillBuild. This is an AI machine specifically made for Mental Fitness Tracking.",
        link: "https://github.com/omdhede/Innovate3D.git",
        image: mental_fitness,
        tags: ["Python3", "Jupyter Notebook", "Kaggle", "Git"],
    },
    {
        title: "Private Discord",
        description: "Built a fully responsive Discord clone. It is a platform specially designed for gamers to create game rooms and servers.",
        link: "https://github.com/omdhede/Innovate3D.git",
        image: mental_fitness,
        tags: [
            "Next.js",
            "React",
            " Socket.io",
            "Prisma",
            "Tailwind CSS",
            "MySQL",
            "Git",
        ],
    },
] as const