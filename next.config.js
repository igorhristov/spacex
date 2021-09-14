module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "live.staticflickr.com",
    ],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },


  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}
