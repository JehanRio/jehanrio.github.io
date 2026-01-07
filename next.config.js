/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除静态导出配置以支持API路由
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