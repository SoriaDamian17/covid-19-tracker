import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import './Card.scss';

const CardComponent = ({ title, typeData, message, data, lastUpdate }) => {

  if (!data) {
    return 'Loading...';
  }

  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={`card ${typeData}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={data.value} duration={2.75} separator="," />
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
