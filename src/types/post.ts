export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readingTime: string
  coverImage?: string
}

export interface PostMetadata {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  readingTime: string
  coverImage?: string
}