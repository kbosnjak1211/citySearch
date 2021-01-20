import React from 'react';
import { connect } from "react-redux";
import { useQuery, gql } from '@apollo/client';

interface IProps {
  unit: string;
  name: string;
}

const CITY_QUERY = gql`
query City($name: String!, $unit: Unit!) {
  getCityByName(name: $name, config: { units: $unit }) {
    country
    weather {
      temperature {
        actual
        feelsLike
        min
        max
      }
      summary {
        title
        description
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
    }
  }
}
`;

export const Info = ({ unit, name }: IProps) => {
  const { loading, error, data } = useQuery(CITY_QUERY, {
    variables: { name, unit },
  });
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      <h3>{name}</h3>
      {data && data.getCityByName && (
        <>
          <p>Country:</p>
          <span>{data.getCityByName.country}</span>
          <p>Weather summary:</p>
          <span>{data.getCityByName.weather.summary.title}</span>
          <p>Weather summary description:</p>
          <span>{data.getCityByName.weather.summary.description}</span>
          <p>Actual temperature:</p>
          <span>{data.getCityByName.weather.temperature.actual}</span>
        </>
      )}
    </div>
  )
}

const mapState = (state: { city: string; }) => ({
  name: state.city
});

export default connect(mapState)(Info);