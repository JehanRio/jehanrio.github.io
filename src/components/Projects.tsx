'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  // {
  //   title: 'AI-Powered Recommendation System',
  //   description: '基于深度学习的智能推荐系统，为用户提供个性化内容推荐。',
  //   tags: ['Python', 'TensorFlow', 'Node.js', 'Redis'],
  //   link: null,
  //   github: 'https://github.com',
  //   featured: true,
  // },
]

export default function Projects() {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Projects that showcase my passion for design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card p-6 group hover:scale-105 transition-transform duration-300 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-3 h-3 text-gray-600" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 text-gray-600" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/projects" className="btn-secondary text-sm px-4 py-2">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}