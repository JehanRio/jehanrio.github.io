import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Calendar, ArrowLeft, Tag, Clock } from 'lucide-react'

const posts = {
  'art-of-design-engineering': {
    title: 'The Art of Design Engineering',
    excerpt: 'Exploring the intersection of design and development, and how to create meaningful user experiences.',
    content: `
# The Art of Design Engineering

Design engineering is more than just the combination of design and development—it's a philosophy that bridges the gap between creative vision and technical execution. In this post, I'll share my thoughts on what makes a great design engineer and how to excel in this role.

## What is Design Engineering?

Design engineering is the practice of combining design sensibility with engineering precision. It's about understanding both the aesthetic and technical aspects of building products. A design engineer doesn't just implement designs; they actively participate in the creative process, bringing technical insight to design decisions and design thinking to engineering choices.

## The Skills Every Design Engineer Needs

### 1. Design Fundamentals
Understanding typography, color theory, layout, and user experience principles is crucial. You need to be able to critique designs, suggest improvements, and understand the "why" behind design decisions.

### 2. Technical Proficiency
Whether it's React, CSS, or whatever technology stack your team uses, you need to be comfortable implementing complex interactions and layouts. Technical skills allow you to push design boundaries.

### 3. Communication
Design engineers often act as translators between designers and developers. You need to communicate design intent to engineers and technical constraints to designers.

### 4. Problem Solving
Every design has technical implications, and every technical solution has design considerations. Design engineers excel at finding creative solutions to complex problems.

## My Journey

I've been working as a design engineer at WeChat Ads Team for 10 years. Throughout this journey, I've learned that the most successful design engineers are those who are genuinely passionate about both design and development. They find joy in the small details—a perfectly smooth animation, a beautifully crafted interface, or an elegant piece of code.

## Building Better Products

When designers and engineers work together from the beginning, the results are always better. Design engineers can:

- Help validate design concepts early in the process
- Identify potential technical challenges before they become blockers
- Suggest design alternatives that are more performant or accessible
- Bridge communication gaps between teams

## The Future of Design Engineering

As our tools and technologies continue to evolve, the role of design engineer becomes increasingly important. We're seeing the rise of:

- AI-assisted design tools
- No-code/low-code platforms
- Advanced animation and interaction libraries
- New ways to create and share design systems

The design engineer of the future will need to be adaptable, continuously learning, and always questioning how we can create better user experiences.

## Conclusion

Being a design engineer isn't just about having technical skills or design sensibility—it's about having the passion to create something meaningful. It's about understanding that every pixel matters, every interaction should be delightful, and every line of code should be crafted with care.

If you're interested in pursuing design engineering, my advice is to start building things. Create projects that challenge you to learn both design and development. Most importantly, never stop being curious about how things work and how they can be improved.
    `,
    date: '2025-01-15',
    tags: ['Design', 'Development', 'UX'],
    readingTime: '5 min read',
  },
 
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug as keyof typeof posts]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="section-padding">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <header className="mb-8">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center gap-2 mb-6">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>
                  }
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>
                  }
                  if (paragraph.startsWith('#### ')) {
                    return <h4 key={index} className="text-lg font-bold mt-3 mb-2">{paragraph.slice(5)}</h4>
                  }
                  if (paragraph.startsWith('```')) {
                    return <pre key={index} className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code>{paragraph.slice(3)}</code></pre>
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />
                  }
                  if (paragraph.trim()) {
                    return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                  }
                  return null
                })}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}