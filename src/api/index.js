import CovidAPI from './covid19';

export const fetchData = async (country) => {
  let changeableUrl = '/';
  if (country) {
    changeableUrl = `/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await CovidAPI.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await CovidAPI.get(`/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await CovidAPI.get(`/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
