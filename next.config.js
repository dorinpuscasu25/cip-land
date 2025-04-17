/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['cipauto.md'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cipauto.md',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
