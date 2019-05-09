const prism = require('@mapbox/rehype-prism');

const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')({
  options: { rehypePlugins: [prism] }
});

module.exports = withMDX(
  withCSS({
    pageExtensions: ['js', 'jsx', 'mdx']
  })
);
