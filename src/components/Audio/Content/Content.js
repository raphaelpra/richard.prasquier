// @flow
import React from 'react';
import styles from './Content.module.scss';
import ReactAudioPlayer from 'react-audio-player';

type Props = {
  body: string,
  title: string,
  audioUrl: string
};

const Content = ({ body, title, audioUrl }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    
    <div className={styles['content__player']}>
      <ReactAudioPlayer
        src={audioUrl}
        controls
      />
    </div>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
