import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Calendar, ArrowLeft, Tag, Clock } from 'lucide-react'

interface BlogPostDetail {
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readingTime: string
}

interface PostsRecord {
  [key: string]: BlogPostDetail
}

const posts: PostsRecord = {
  // 'your-article-slug': {
  //   title: 'Your Article Title',
  //   excerpt: 'Brief description of your article content...',
  //   content: \`
  // # Your Article Title

  // Start your article introduction here. This should give readers an overview of what they'll learn or discover.

  // ## Section 1

  // Write your main content here. You can use markdown formatting:

  // - Bullet points
  // - **Bold text**
  // - *Italic text*
  // - \`code snippets\`

  // ### Subsection

  // Add more detailed content in subsections as needed.

  // ## Conclusion

  // Wrap up your article with key takeaways and conclusions.
  //   \`,
  //   date: '2025-01-15',
  //   tags: ['Tag1', 'Tag2', 'Tag3'],
  //   readingTime: '5 min read',
  // },
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const postSlugs = Object.keys(posts)
  
  // If no posts exist, return at least one placeholder to prevent build errors
  if (postSlugs.length === 0) {
    return [{ slug: 'placeholder' }]
  }
  
  return postSlugs.map((slug) => ({
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
