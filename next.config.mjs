/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

images: {
  remotePatterns: [
    // Development URLs
    {
      protocol: "http",
      hostname: "localhost",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "localhost",
      pathname: "/**",
    },
    {
      protocol: "http",
      hostname: "127.0.0.1",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "127.0.0.1",
      pathname: "/**",
    },
    // Production URLs
    {
      protocol: "http",
      hostname: "api.indiaprograms.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "api.indiaprograms.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "http",
      hostname: "api.amityonlines.com",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "api.amityonlines.com",
      pathname: "/uploads/**",
    },
  ],
},

  async redirects() {
    return [];
  },
};

export default nextConfig;
