/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
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

  async redirects() {
    return [];
  },
};

export default nextConfig;
