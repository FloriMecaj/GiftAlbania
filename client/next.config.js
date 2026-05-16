/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "instagram.ftia1-1.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
