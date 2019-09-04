// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Audio.module.scss';
import type { Node } from '../../types';

type Props = {
  audio: Node
};

const Audio = ({ audio }: Props) => {
  const { html } = audio;
  const { tagSlugs, slug } = audio.fields;
  const { tags, title, date, audioUrl } = audio.frontmatter;

  return (
    <div className={styles['audio']}>
      <Link className={styles['audio__home-button']} to="/audios">Les émissions</Link>

      <div className={styles['audio__content']}>
        <Content body={html} title={title} audioUrl={audioUrl}/>
      </div>

      <div className={styles['audio__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['audio__comments']}>
        <Comments audioSlug={slug} audioTitle={audio.frontmatter.title} />
      </div>
    </div>
  );
};

export default Audio;
