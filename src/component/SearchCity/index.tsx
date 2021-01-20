import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Info from '../Info';

const SearchCity = () => {
  const [city, setCity] = useState('Zagreb');
  const [unit, setUnit] = useState('metric');
  const infoProps = {
    unit: unit,
  }
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Search city</h1>
      <input
        className="inputSearch"
        type="text"
        value={city}
        placeholder="Search"
        onChange={(e) => {
          setCity(e.target.value);
          dispatch({
            type: 'cityTyped',
            payload: { city: e.target.value },
          })} 
        }
      />
      <select className="selectUnit" onChange={(e) => setUnit(e.target.value)} value={unit}>
        <option>metric</option>
        <option>imperial</option>
        <option>kelvin</option>
      </select>
      <Info {...infoProps} />
    </div>
  )
}

export default SearchCity;