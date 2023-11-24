/** @type {import('next').NextConfig} */

const { default: next } = require('next');

const nextConfig = {
  async rewrites(){
    return [
      {
        source:"/api/backendii/:path*",
        destination:"https://timeline-backendii.vercel.app/:path*"
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


module.exports = nextConfig;
