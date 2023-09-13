import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { LineChart } from '@mui/x-charts';

const Graph = ({data}) => {
    var today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const temperatureData = data.list.map((data) => (
        data.main.temp - 273.15));
    const pressureData = data.list.map((data) => (
        data.main.pressure));
    const humidityData = data.list.map((data) => (
        data.main.humidity));
    const xLabels =  data.list.map((data) => (
        data.dt_txt.slice(8,10) + ' ' + months[today.getMonth()] + '('+data.dt_txt.slice(11,16) + ')'));
    
    let requiredXLabels = [];            
    let requiredHumidityData = [];
    let requiredTemperatureData = [];
    let requiredPressureData = [];
        
    for (let i = 0; i < xLabels.length; i+=4) {
        requiredXLabels.push(xLabels[i]);
        requiredHumidityData.push(humidityData[i]);
        requiredTemperatureData.push(temperatureData[i]);
        requiredPressureData.push(pressureData[i]);
    }
  return (
   <>
      <Card sx={{display: 'flex',
        justifyContent: 'center'}}>
        <CardContent sx={{textAlign:'center'}}> 
          <LineChart
            series={[
                { data: requiredTemperatureData, label: 'Temperature', id: 'tId' },
              ]}
              xAxis={[{ data: requiredXLabels, scaleType: 'band' }]}
            width={1000}
            height={600}
          />
          <LineChart
            series={[
                { data: requiredPressureData, label: 'Pressure', id: 'pId' },
              ]}
              xAxis={[{ data: requiredXLabels, scaleType: 'band' }]}
            width={1000}
            height={600}
          />
          <LineChart
            series={[
                { data: requiredHumidityData, label: 'Humidity', id: 'hId' },
              ]}
              xAxis={[{ data: requiredXLabels, scaleType: 'band' }]}
            width={1000}
            height={600}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default Graph;
