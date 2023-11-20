/** @type {import('next').NextConfig} */

const nextConfig = {}
module.exports = {
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
 
}


