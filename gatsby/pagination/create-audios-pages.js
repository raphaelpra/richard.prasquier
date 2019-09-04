'use strict';
'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "audio" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { audiosPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / audiosPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/audios' : `/audios/page/${i}`,
      component: path.resolve('./src/templates/index-audio-template.js'),
      context: {
        currentPage: i,
        postsLimit: audiosPerPage,
        postsOffset: i * audiosPerPage,
        prevPagePath: i <= 1 ? '/' : `/audios/page/${i - 1}`,
        nextPagePath: `/audios/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};
