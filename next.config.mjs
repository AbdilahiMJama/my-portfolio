/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com", // Add the hostname you want to allow
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
