import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Mail, Github, Linkedin, MapPin, Calendar, Award, Coffee } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Design Engineer & Creative Developer',
  description: 'Learn more about my journey as a design engineer, my passion for creative coding, and my approach to building meaningful digital experiences.',
}

const skills = {
  'Design': ['UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'Motion Design'],
  'Development': ['React', 'TypeScript', 'Next.js', 'Node.js', 'CSS/SCSS'],
  'Creative Coding': ['JavaScript', 'Canvas API', 'WebGL', 'Generative Art', 'Data Visualization'],
  'Tools': ['Figma', 'Adobe Creative Suite', 'VS Code', 'Git', 'Design Systems'],
}

const experience = [
  {
    title: 'Senior Design Engineer',
    company: 'WeChat Ads Team',
    period: '2015 - Present',
    description: 'Leading design-engineering initiatives for large-scale advertising platforms. Responsible for creating design systems, implementing complex interactions, and bridging the gap between design and engineering teams.',
    achievements: [
      'Designed and implemented design system used across 50+ products',
      'Led cross-functional team of 15 designers and engineers',
      'Created interactive animation library used by millions of users',
      'Mentored 20+ junior designers and developers'
    ]
  },
  {
    title: 'Creative Developer',
    company: 'Freelance',
    period: '2012 - 2015',
    description: 'Worked with startups and agencies on interactive web experiences, creative coding projects, and digital installations.',
    achievements: [
      'Created award-winning interactive installations',
      'Built generative art projects featured in galleries',
      'Developed custom web experiences for 30+ clients',
      'Pioneered new techniques in web-based animation'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Startup',
    period: '2010 - 2012',
    description: 'Started my career building responsive web applications and learning the fundamentals of modern web development.',
    achievements: [
      'Built responsive websites from scratch',
      'Learned modern JavaScript frameworks',
      'Contributed to open source projects',
      'Developed strong foundation in web standards'
    ]
  }
]

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Quality Craftsmanship',
    description: 'Every pixel matters. I believe in creating experiences that are not just functional, but beautiful and delightful to use.'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'The web is constantly evolving, and I love staying up-to-date with the latest technologies and design trends.'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'User-Centered Design',
    description: 'Great design starts with understanding users. I always prioritize user needs and accessibility in everything I create.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="section-padding">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              A
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Alex</span>
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
                <span>10+ years experience</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about creating elegant and refined UIs with creative design, 
              motion design, interactive animation, React, CSS, and generative art. 
              My vocation is to bridge the gap between design and development.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              What I <span className="gradient-text">Value</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
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
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <div key={index} className="card p-8 mb-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium mb-2">
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
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
              Skills & <span className="gradient-text">Expertise</span>
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
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting projects, 
              or just having a chat about design and technology. Feel free to reach out!
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
              Currently available for freelance projects and consulting
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}