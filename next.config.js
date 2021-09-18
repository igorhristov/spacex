module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "live.staticflickr.com",
      "www.flickr.com",
      'upload.wikimedia.org'
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  eslint: {
    ignoreDuringBuilds: true,
  }
}