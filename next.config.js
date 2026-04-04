/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '/PeakAI',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig