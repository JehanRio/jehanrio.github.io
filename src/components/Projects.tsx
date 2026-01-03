'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Flow - Atomic Class Fluid Component',
    description: 'A modern, flexible component library built with atomic CSS principles. Focuses on fluid design and responsive layouts.',
    tags: ['React', 'TypeScript', 'CSS'],
    link: 'https://codepen.io/aragakey',
    github: null,
    featured: true,
  },
  {
    title: 'Pixie - Design Review Tool',
    description: 'A comprehensive design review and feedback platform for design teams. Streamlines the approval process.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://wxad.design/pixie',
    github: null,
    featured: true,
  },
  {
    title: 'Generative Art Collection',
    description: 'A collection of generative art pieces exploring the intersection of code and creativity.',
    tags: ['JavaScript', 'Canvas', 'Creative Coding'],
    link: null,
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Motion Design Portfolio',
    description: 'Interactive portfolio showcasing motion design and micro-interactions for modern web applications.',
    tags: ['CSS', 'JavaScript', 'Animation'],
    link: null,
    github: 'https://github.com',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my passion for design and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card p-8 group hover:scale-105 transition-transform duration-300 ${
                project.featured ? 'lg:col-span-2 lg:max-w-none' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}