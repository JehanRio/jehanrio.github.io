/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export' 以支持 API 路由
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  experimental: {
    optimizeCss: true,
  },
  images: {
    // 保留 unoptimized: true 以支持静态部署
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com', 'github.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig