/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.x.x",   // your LAN IP
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
