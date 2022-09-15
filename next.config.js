/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  target: "serverless",
  basePath: ghPages ? '/blog' : '',
  assetPrefix: ghPages ? './' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
});
