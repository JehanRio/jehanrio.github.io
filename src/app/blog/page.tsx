import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'art-of-design-engineering',
    title: 'The Art of Design Engineering',
    excerpt: 'Exploring the intersection of design and development, and how to create meaningful user experiences that balance aesthetics with functionality.',
    date: '2025-01-15',
    tags: ['Design', 'Development', 'UX'],
    readingTime: '5 min read',
  },
  {
    slug: 'building-interactive-animations',
    title: 'Building Interactive Animations',
    excerpt: 'A comprehensive guide to creating smooth, performant animations that enhance user experience without compromising performance.',
    date: '2025-01-10',
    tags: ['Animation', 'CSS', 'JavaScript'],
    readingTime: '8 min read',
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques',
    excerpt: 'Exploring the latest CSS features including Container Queries, CSS Layers, and modern layout techniques that improve development workflow.',
    date: '2025-01-05',
    tags: ['CSS', 'Web Development'],
    readingTime: '6 min read',
  },
  {
    slug: 'generative-art-with-code',
    title: 'Generative Art with Code',
    excerpt: 'How to create beautiful generative art using JavaScript, Canvas API, and creative coding techniques.',
    date: '2024-12-28',
    tags: ['Creative Coding', 'JavaScript', 'Art'],
    readingTime: '10 min read',
  },
  {
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization',
    excerpt: 'Advanced techniques for optimizing React applications, from memoization to code splitting and lazy loading.',
    date: '2024-12-20',
    tags: ['React', 'Performance', 'Optimization'],
    readingTime: '7 min read',
  },
  {
    slug: 'design-systems-guide',
    title: 'Building Design Systems',
    excerpt: 'A practical guide to creating scalable design systems that improve consistency and development velocity.',
    date: '2024-12-15',
    tags: ['Design Systems', 'UI/UX', 'Best Practices'],
    readingTime: '9 min read',
  },
]

export const metadata: Metadata = {
  title: 'Blog - Personal Thoughts on Design & Development',
  description: 'Read my thoughts on design, development, creative coding, and the intersection of technology and art.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughts on design, development, creative coding, and the creative process. 
              Join me as I explore the intersection of technology and art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{post.readingTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}