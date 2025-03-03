import Button from "./Button";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div className='flex flex-col justify-between space-y-[7vh] lg:space-y-[10vh]'>
        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <div className="text-[27px]">Featured Projects</div>
            <ProjectCard
                img="/project-1.webp"
                title="Kai Tak Sports Park"
                year={2025}
                size="small"
            />
        </div>
        <div className='pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <ProjectCard
                img="/project-2.webp"
                title="Tottenham Hotspur Stadium"
                year={2019}
                size="small"
            />
        </div>
        <div className='pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]'>
            <ProjectCard
                img="/project-3.webp"
                title="BMO Centre"
                year={2024}
                size="medium"
            />
        </div>
        <div>
            <div className="relative top-40 z-10 text-white flex justify-around">
                <div className="text-3xl">Sphere</div>
                <Button
                    text="View Project"
                    variant="primary"
                />
            </div>
            <ProjectCard
                img="/project-4.webp"
                size="large"
            />
        </div>
    </div>
  )
}

export default ProjectsSection