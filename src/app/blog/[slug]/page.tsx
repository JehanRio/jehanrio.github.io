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
  'building-interactive-animations': {
    title: 'Building Interactive Animations',
    excerpt: 'A comprehensive guide to creating smooth, performant animations that enhance user experience without compromising performance.',
    content: `
# Building Interactive Animations

Animation is one of the most powerful tools in a designer's toolkit. When done well, animations can guide users through interfaces, provide feedback, and create emotional connections. When done poorly, they can slow down applications and frustrate users.

## The Principles of Good Animation

### 1. Purpose
Every animation should serve a purpose. Ask yourself: "What is this animation trying to communicate?" Is it showing a state change? Providing feedback? Guiding attention?

### 2. Timing
Timing is crucial. Animations that are too slow feel sluggish; animations that are too fast feel jarring. The golden rule is 200-300ms for most UI transitions.

### 3. Easing
Use easing functions to make animations feel natural. Linear animations feel robotic. Ease-out animations work well for entrance animations, while ease-in animations work for exit animations.

### 4. Consistency
Maintain consistent timing and easing across your application. This creates a cohesive experience and helps users understand how interactions work.

## CSS Animations vs JavaScript Animations

### CSS Animations
CSS animations are great for:
- Simple state changes
- Micro-interactions
- Performance-critical animations

### JavaScript Animations
JavaScript animations are better for:
- Complex, multi-step animations
- Physics-based animations
- Animations that need to respond to user input

## Performance Considerations

### Hardware Acceleration
Use transform and opacity properties for better performance. These properties can be handled by the GPU.

### Will-change Property
Use the \`will-change\` property sparingly to hint to browsers about upcoming animations.

### Avoiding Layout Thrashing
Be careful with properties that trigger layout recalculation. Read layout properties before writing to them.

## Practical Examples

Let me walk through a few practical animation patterns:

### Button Hover Effect
\`\`\`css
.button {
  transition: transform 200ms ease-out;
}

.button:hover {
  transform: scale(1.05);
}
\`\`\`

### Page Transition
\`\`\`css
.page {
  animation: slideIn 300ms ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

## Advanced Techniques

### Spring Animations
For more natural feeling animations, consider using spring physics. Libraries like Framer Motion or React Spring can help with this.

### Gesture-based Animations
With touch devices, consider how animations respond to touch events. This can create more engaging interactions.

### Micro-interactions
Small, subtle animations like loading indicators, form validation feedback, or button states can significantly improve user experience.

## Tools and Libraries

- **Framer Motion**: React animation library with spring physics
- **React Spring**: Physics-based animation library
- **Lottie**: After Effects animations for the web
- **GSAP**: Professional-grade animation library
- **CSS Animations**: Built-in CSS animation capabilities

## Conclusion

Good animation is invisible to the user—it just feels right. Focus on creating animations that enhance the user experience rather than distracting from it. Test your animations on different devices and browsers to ensure consistent performance.

Remember: animation is a tool, not a toy. Use it wisely, and it will make your applications feel more polished and professional.
    `,
    date: '2025-01-10',
    tags: ['Animation', 'CSS', 'JavaScript'],
    readingTime: '8 min read',
  },
  'modern-css-techniques': {
    title: 'Modern CSS Techniques',
    excerpt: 'Exploring the latest CSS features including Container Queries, CSS Layers, and modern layout techniques.',
    content: `
# Modern CSS Techniques

CSS has evolved dramatically over the past few years. What once required complex JavaScript solutions can now be achieved with pure CSS. Let's explore some of the most powerful modern CSS techniques that can improve your development workflow.

## Container Queries

Container queries are one of the most exciting additions to CSS. Unlike media queries that respond to viewport size, container queries respond to the size of their parent container.

### Basic Usage
\`\`\`css
.card-container {
  container-type: inline-size;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
}

@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

This allows components to be truly modular and adapt to any container size.

## CSS Layers

CSS Layers give you fine-grained control over CSS specificity and cascade order.

### Defining Layers
\`\`\`css
@layer reset, base, components, utilities;

@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer components {
  .button {
    background: blue;
    color: white;
    padding: 1rem 2rem;
  }
}
\`\`\`

### Benefits
- Better control over cascade
- Easier maintenance
- Reduced specificity wars

## Modern Layout Techniques

### CSS Grid with Subgrid
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
\`\`\`

### CSS Custom Properties with Math Functions
\`\`\`css
:root {
  --base-size: 1rem;
  --scale: 1.25;
}

h1 {
  font-size: calc(var(--base-size) * var(--scale) * var(--scale) * var(--scale));
}

h2 {
  font-size: calc(var(--base-size) * var(--scale) * var(--scale));
}
\`\`\`

## Advanced Selectors

### :has() Pseudo-class
\`\`\`css
/* Style parent based on child */
.form:has(input:invalid) {
  border-color: red;
}

/* Style siblings */
.button:has(+ .tooltip) {
  position: relative;
}
\`\`\`

### :nth-child() with Formula
\`\`\`css
/* Every 3rd item starting from the 2nd */
li:nth-child(3n + 2) {
  background: lightblue;
}
\`\`\`

## Modern Animation Techniques

### Scroll-driven Animations
\`\`\`css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fade-in linear;
  animation-timeline: scroll();
  animation-range: entry 0% cover 50%;
}
\`\`\`

### View Transitions API
\`\`\`css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 300ms;
  animation-timing-function: ease-out;
}
\`\`\`

## Practical Applications

### Responsive Design System
\`\`\`css
@layer tokens {
  :root {
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 1rem;
    --space-4: 2rem;
  }
}

@layer components {
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .stack-sm {
    gap: var(--space-2);
  }
  
  .stack-lg {
    gap: var(--space-4);
  }
}
\`\`\`

### Component Variants
\`\`\`css
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: 600;
  transition: all 200ms ease;
}

@layer variants {
  .button--primary {
    background: blue;
    color: white;
  }
  
  .button--secondary {
    background: gray;
    color: white;
  }
  
  .button--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }
}
\`\`\`

## Performance Considerations

### Content Visibility
\`\`\`css
.slow-section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
\`\`\`

### Containment
\`\`\`css
.widget {
  contain: layout style paint;
}
\`\`\`

## Browser Support

Most modern CSS features have good browser support, but always check caniuse.com for specific features and consider progressive enhancement.

## Conclusion

Modern CSS gives us powerful tools to create complex, responsive designs without relying on JavaScript. By mastering these techniques, you can build more maintainable, performant, and accessible interfaces.

Start with one technique at a time and gradually incorporate them into your workflow. The key is understanding when and how to use each feature effectively.
    `,
    date: '2025-01-05',
    tags: ['CSS', 'Web Development'],
    readingTime: '6 min read',
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