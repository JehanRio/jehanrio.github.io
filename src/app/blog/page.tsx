import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: string
}

const posts: BlogPost[] = [
  // {
  //   slug: 'your-article-slug',
  //   title: 'Your Article Title',
  //   excerpt: 'Brief description of your article content...',
  //   date: '2025-01-15',
  //   tags: ['Tag1', 'Tag2', 'Tag3'],
  //   readingTime: '5 min read',
  // },
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
              记录我的所思所感
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