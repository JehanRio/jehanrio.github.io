'use client'

import Link from 'next/link'
import { ArrowRight, Github, Mail, MapPin, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              A
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Hi, I'm Alex</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-4">
            Design Engineer & Creative Developer
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for freelance</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm passionate about creating elegant and refined UIs with creative design, 
            motion design, interactive animation, React, CSS, and generative art. 
            My vocation is to bridge the gap between design and development.
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