'use client'

import Link from 'next/link'
import { ArrowRight, Github, Mail, MapPin, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Hi, I'm JehanRio</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-4">
            Backend Engineer & Creative Developer
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Shenzhen, China</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for freelance</span>
            </div>
          </div>
          
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
            保持思考, 等待, 斋戒
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/blog" className="btn-primary group">
              Read My Blog
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}