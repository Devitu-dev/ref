import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jmhep71csry1t0ni.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
