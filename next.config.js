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
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: "/tracker/:path*",
          has: [
            {
              type: "host",
              value: "tracker.matthewespinoza.com",
            },
          ],
          destination: "/tracker/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
