import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Audio from '../components/Audio';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: MarkdownRemark
};

const AudioTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { title: audioTitle, description: audioDescription } = data.markdownRemark.frontmatter;
  const metaDescription = audioDescription !== null ? audioDescription : siteSubtitle;

  return (
    <Layout title={`${audioTitle} - ${siteTitle}`} description={metaDescription}>
      <Audio audio={data.markdownRemark} />
    </Layout>
  );
};


export const query = graphql`
  query AudioBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        audioUrl
        description
        tags
        title
      }
    }
  }
`;


export default AudioTemplate;
