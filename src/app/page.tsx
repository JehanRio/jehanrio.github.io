import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

const recentPosts = [
  {
    title: 'The Art of Design Engineering',
    excerpt: 'Exploring the intersection of design and development, and how to create meaningful user experiences.',
    date: '2025-01-15',
    slug: 'art-of-design-engineering',
  },
  {
    title: 'Building Interactive Animations',
    excerpt: 'A deep dive into creating smooth, performant animations that enhance user experience.',
    date: '2025-01-10',
    slug: 'building-interactive-animations',
  },
  {
    title: 'Modern CSS Techniques',
    excerpt: 'Exploring the latest CSS features and how they can improve your development workflow.',
    date: '2025-01-05',
    slug: 'modern-css-techniques',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Recent <span className="gradient-text">Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts on design, development, and the creative process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
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
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      <Projects />
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, 
              interesting projects, or just having a chat about design and technology.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:alex@example.com"
                className="btn-secondary border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 My Personal Blog. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}