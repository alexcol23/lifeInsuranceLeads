/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.metlife.com',
      },
      {
        protocol: 'https',
        hostname: 'www.prudential.com',
      },
      {
        protocol: 'https',
        hostname: 'www.axa.com',
      },
    ],
  },
};

module.exports = nextConfig;
