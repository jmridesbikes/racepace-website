/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to a subdirectory, uncomment and set your repo name:
  // basePath: '/racepace-website',
  // trailingSlash: true,
}

module.exports = nextConfig

