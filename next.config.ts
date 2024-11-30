// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/imgdownload",  // The route you will call from the client-side
        destination: "https://testd5-img.azurewebsites.net/api/imgdownload",  // The real API endpoint
      },
    ];
  },
};

module.exports = nextConfig;
