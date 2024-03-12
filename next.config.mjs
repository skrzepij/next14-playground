/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // i wanted to add specific hostname but i get errors 🥲
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
