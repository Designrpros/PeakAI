/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/PeakAI',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig