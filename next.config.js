/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/tracker",
        destination: "https://compound.super.site/",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "https://compound.beehiiv.com/",
        permanent: true, // Set this to false if you want a temporary redirect
      },
      {
        source: "/life",
        destination: "https://compound.beehiiv.com/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/life/:path*",
        has: [{ type: "host", value: "life.matthewespinoza.com" }],
      },
      {
        // fallback
        source: "/:path*",
        destination: "/life/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
