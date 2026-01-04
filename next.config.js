/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出配置 - 支持 GitHub Pages 部署
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  experimental: {
    optimizeCss: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com', 'github.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig