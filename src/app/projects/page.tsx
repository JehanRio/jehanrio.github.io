import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  tags: string[]
  status: string
  year: string
  link?: string | null
  github?: string | null
  featured: boolean
  highlights: string[]
}

const projects: Project[] = [
  // {
  //   title: 'Your Project Title',
  //   description: 'Brief description of your project...',
  //   longDescription: 'Detailed description of your project, its features, and what makes it special...',
  //   tags: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
  //   status: 'Active', // or 'Completed', 'In Progress', etc.
  //   year: '2024',
  //   link: 'https://your-project-url.com',
  //   github: 'https://github.com/JehanRio/project',
  //   featured: true, // true for featured section, false for other projects
  //   highlights: [
  //     'Key feature 1',
  //     'Key feature 2',
  //     'Key feature 3',
  //     'Key feature 4'
  //   ]
  // },
]

export const metadata: Metadata = {
  title: 'Projects - Creative Development Portfolio',
  description: 'Explore my projects in design engineering, creative coding, and modern web development.',
}

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of AI projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="card p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded hover:bg-gray-100 transition-colors"
                        >
                          <Github className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                    <span>•</span>
                    <span className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Interested in collaborating or want to discuss any of these projects?
            </p>
            <a href="mailto:jehanrio77@gmail.com" className="btn-primary">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}