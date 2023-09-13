import React, { useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Graph from './Graph';

const Weather = ({data}) => {
    const cityName = data.city.name;
    const [chart, setChart] = useState(false);
    
    const handleChart = () => {
        setChart(!chart);
    }
    const temperatureData = data.list.map((data) => (
        data.main.temp - 273.15));
    const feelsLike = data.list.map((data) => (
        data.main.feels_like - 273.15));  
    const minTemp = data.list.map((data) => (
        data.main.temp_min - 273.15));
    const maxTemp = data.list.map((data) => (
        data.main.temp_max - 273.15));                         
    const pressureData = data.list.map((data) => (
        data.main.pressure));
    const humidityData = data.list.map((data) => (
        data.main.humidity));
  return (
   <>
      <Card onClick={handleChart} sx={{ backgroundColor: '#F5F5F5' ,cursor: 'pointer', mr:'20px',ml:'20px', mt:'20px'}}>
        <CardContent>
            <Typography variant='h4'>{cityName} {temperatureData[0].toFixed(2)} <sup>o</sup>C</Typography>
            <Typography variant='p'>Humidity: {humidityData[0]}%</Typography><br/>
            <Typography variant='p'>Pressure: {pressureData[0]} mbar</Typography><br/>
            <Typography variant='p'>Feels Like: {feelsLike[0].toFixed(2)} <sup>o</sup>C</Typography><br/>
            <Typography variant='p'>Min: {minTemp[0].toFixed(2)} <sup>o</sup>C</Typography><br/>
            <Typography variant='p'>Max: {maxTemp[0].toFixed(2)} <sup>o</sup>C</Typography>
            {chart && <Graph data={data}/>}
        </CardContent>
      </Card>
      
    </>
  );
}

export default Weather;
