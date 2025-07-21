/** @type {import("next").NextConfig} */
const config = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/api/.well-known/:path*",
      },
    ];
  },
};

export default config;
