/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // Localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "192.168.x.x", // your LAN IP
        port: "5000",
        pathname: "/uploads/**",
      },

      // Production domains
      {
        protocol: "https",
        hostname: "indiaprograms.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.indiaprograms.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
