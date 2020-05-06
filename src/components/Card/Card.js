import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.scss';

const CardComponent = ({ title, typeData, message, value, lastUpdate }) => {
  const styleData = styles[typeData];
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cx(styles.card, styleData)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
