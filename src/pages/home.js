import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { fetchData } from '../api';

import { Card, Chart, Layout, CountryPicker } from '../components';

import '../styles/home.scss';

export default () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const handleCountryChange = async (countryId) => {
    const resp = await fetchData(countryId);
    setData(resp);
    setCountry(country);
  };

  return (
    <Layout title="Home">
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Card
            title="Infected"
            typeData="infected"
            message="Number of active cases of COVID-19."
          />
          <Card
            title="Recovered"
            typeData="recovered"
            message="Number of recoveries from COVID-19."
          />
          <Card
            title="Deaths"
            typeData="deaths"
            message="Number of deaths caused by COVID-19."
          />
        </Grid>
      </div>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </Layout>
  );
};
