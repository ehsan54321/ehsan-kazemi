'use client'
import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs'

type Projects = {
  name: string
  description: string
  image: string
  package?: string
  github?: string
  link?: string
  aos: string
}
const projects: Array<Projects> = [
  {
    name: 'Marxket',
    description:
      "I don't have a job history, but I have a very complete project on the web, which is equivalent to a complete site about digital currencies.",
    package:
      'React.js,Next.js,Next.js API route,TailwindCSS,Chart.js,Scss,TypeScript,PWA',
    image: '/marx.png',
    link: 'https://marx.liara.run',
    github: 'https://github.com/ehsan54321/marx',
    aos: 'zoom-in',
  },
  {
    name: 'This project',
    description: 'My CV.',
    image: '/this.png',
    package: 'React.js,Next.jsTailwindCSS,TypeScript',
    link: 'http://ehsan-kazemi.ir',
    github: 'https://github.com/ehsan54321/ehsan-kazemi',
    aos: 'flip-down',
  },
  {
    name: 'Abjad',
    description: 'Convert alphabet letters to Abjad.',
    image: '/abjad.png',
    package: 'React.js,Vite.js,TailwindCSS,TypeScript',
    github: 'Number to Abjad',
    aos: 'flip-up',
  },
  {
    name: 'Fa Date',
    description: "today's date.",
    image: '/in-date.png',
    package: 'Vite.js,TypeScript,PWA',
    github: 'https://github.com/ehsan54321/fa-date',
    aos: 'fade-up',
  },
]

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 600, delay: 100 })
  }, [])
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project) => {
          return (
            <div key={project.name} data-aos={project.aos}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2 relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  {project.link && (
                    <Link
                      href={project.link}
                      className="absolute w-full h-full top-0"
                    ></Link>
                  )}
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-wrap mt-3">
                {project.package &&
                  project.package.split(',').map((skill) => (
                    <p
                      key={skill}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {skill}
                    </p>
                  ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
