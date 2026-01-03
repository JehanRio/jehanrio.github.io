import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Mail, Github, Linkedin, MapPin, Calendar, Award, Coffee } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Backend Developer & AI Engineer',
  description: 'Learn more about my journey as a backend developer, my passion for AI development, and my approach to building scalable systems.',
}

const skills = {
  'Backend': ['Node.js', 'Python', 'Go', 'Database Design', 'API Development'],
  'Frontend': ['React', 'Next.js', 'TypeScript', 'CSS/SCSS', 'UI/UX'],
  'AI & Data': ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Algorithm Design', 'Neural Networks'],
  'Tools': ['Git', 'Docker', 'AWS', 'Linux', 'System Design'],
}

const experience = [
  {
    title: 'Backend Developer',
    company: 'Tencent',
    period: '2025 - Present',
    description: '专注于后台系统开发和AI应用构建。负责高并发系统架构设计、性能优化和AI算法实现。',
    achievements: [
      '设计和实现了多个高并发后台服务',
      '优化系统性能，提升30%响应速度',
      '开发AI驱动的智能推荐系统',
      '指导团队技术架构设计'
    ]
  },
  {
    title: 'Backend Developer',
    company: 'Huawei',
    period: '2024 - 2025',
    description: '从事后台开发工作，参与大规模分布式系统建设。专注于系统稳定性、性能优化和代码质量。',
    achievements: [
      '参与核心业务系统开发',
      '提升系统可用性至99.9%',
      '重构遗留代码，提升维护性',
      '建立代码审查和质量标准'
    ]
  },
  {
    title: 'AI Engineer',
    company: 'Personal Projects',
    period: '2023 - Present',
    description: '专注于AI技术研究和应用开发，探索前沿算法在实际业务中的应用。',
    achievements: [
      '开发多个AI驱动的应用',
      '研究最新的机器学习算法',
      '开源贡献多个AI项目',
      '持续学习前沿技术'
    ]
  }
]

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: '技术精湛',
    description: '每一个细节都值得精心打磨。追求高质量的代码和优雅的系统设计。'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: '持续学习',
    description: '技术日新月异，始终保持学习的热情，跟上时代的发展。'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: '用户至上',
    description: '优秀的设计始于对用户的理解。始终将用户需求和体验放在首位。'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gray-300 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gray-400 rounded-full blur-3xl float-animation-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gray-200 rounded-full blur-2xl float-animation-delayed-2"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="section-padding">
          <div className="container">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-4xl font-bold">
                <img
                  src="https://github.com/JehanRio.png"
                  alt="JehanRio"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">JehanRio</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-4">
                后台开发 · AI vibe coding
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Shenzhen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>保持思考 · 等待 · 斋戒</span>
                </div>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                专注于后台系统开发和AI技术应用，致力于构建高性能、可扩展的系统架构。
                喜欢探索前沿技术，追求代码的优雅和系统的稳定。
              </p>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                我的 <span className="gradient-text">理念</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-gray-700 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                工作 <span className="gradient-text">经历</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                {experience.map((exp, index) => (
                  <div key={index} className="card p-8 mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-700 font-medium mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-gray-500 font-medium">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">主要成就:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                技能 & <span className="gradient-text">专长</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="card p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {category}
                    </h3>
                    <ul className="space-y-2">
                      {skillList.map((skill) => (
                        <li key={skill} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="text-center bg-white rounded-xl shadow-lg p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                联系 <span className="gradient-text">方式</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                欢迎交流技术话题、讨论合作机会，或者仅仅是聊聊设计和技术的故事。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a 
                  href="mailto:alex@example.com"
                  className="btn-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
                
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
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-500">
                保持思考, 等待, 斋戒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}