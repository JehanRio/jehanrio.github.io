import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const recentPosts = [
  {
    title: 'The Art of Design Engineering',
    excerpt: 'Exploring the intersection of design and development.',
    date: '2025-01-15',
    slug: 'art-of-design-engineering',
  },
  {
    title: 'Building Interactive Animations',
    excerpt: 'Creating smooth, performant animations.',
    date: '2025-01-10',
    slug: 'building-interactive-animations',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gray-300 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gray-400 rounded-full blur-3xl float-animation-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gray-200 rounded-full blur-2xl float-animation-delayed-2"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <section className="py-8 lg:py-12 relative">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                Recent <span className="gradient-text">Posts</span>
              </h2>
              <p className="text-sm text-gray-600 max-w-lg mx-auto">
                Thoughts on design, development, and the creative process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {recentPosts.map((post) => (
                <article key={post.slug} className="card p-4 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm group"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link href="/blog" className="btn-primary text-sm px-4 py-2">
                View All Posts
              </Link>
            </div>
          </div>
          
          <div className="absolute top-20 right-10 w-24 h-24 bg-gray-100 rounded-full opacity-20 float-animation"></div>
          <div className="absolute bottom-32 left-10 w-20 h-20 bg-gray-200 rounded-full opacity-15 float-animation-delayed"></div>
        </section>

        <Projects />
      </div>
    </div>
  )
}