// @flow
import React from 'react';
import moment from 'moment';
import "moment/locale/fr";
moment.locale("fr");

import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Diffusé le {moment(date).format('DD/MM/YYYY')}</p>
  </div>
);

export default Meta;
