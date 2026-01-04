'use client'

import Link from 'next/link'
import { ArrowRight, Github, Mail, MapPin, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-8 lg:py-12 relative overflow-hidden">
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-2xl font-bold">
              <img
                src="https://github.com/JehanRio.png"
                alt="JehanRio"
                className="w-20 h-20 rounded-full object-cover"
              />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                <span className="gradient-text">Hi, I'm JehanRio</span>
              </h1>
              
              <p className="text-base lg:text-lg text-gray-600 mb-3">
                后台开发 · AI
              </p>
              
              <div className="space-y-1 text-sm text-gray-500 mb-4">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>Shenzhen</span>
                </div>
                <div>
                  <a 
                    href="https://www.tencent.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-colors"
                  >
                    腾讯
                  </a> · 2025~至今
                </div>
                <div>
                  <a 
                    href="https://www.huawei.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-colors"
                  >
                    华为
                  </a> · 2024~2025
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                保持思考, 等待, 斋戒
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/blog" className="btn-primary group text-sm px-4 py-2">
                  Read My Blog
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex gap-2">
                  <a 
                    href="https://github.com/JehanRio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                  <a 
                    href="mailto:jehanrio77@gmail.com"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-50 float-animation"></div>
      <div className="absolute top-32 right-20 w-20 h-20 bg-gray-200 rounded-full opacity-30 float-animation-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-40 float-animation-delayed-2"></div>
    </section>
  )
}