/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'storage.googleapis.com',
        pathname: '/du-prd/books/images/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

module.exports = nextConfig;
