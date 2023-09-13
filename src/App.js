import React, { useState, useEffect } from 'react';
import './App.css';
import { useGetWeatherQuery } from './apis/weatherApi';
import Search from './components/SearchBar/Search';
import Header from './components/Header/Header';
import Error from './components/Error/Error'
import Weather from './components/Weather/Weather';

function App() {
  const [searchData, setSearchData] = useState('');
  const [apiData,setApiData] = useState([]);
  const get_data = (data) => {
    setSearchData(data);
  }
  const { data ,isFetching, isSuccess } = useGetWeatherQuery(searchData);
  if(isFetching) <p>Loading...</p>;
 
  useEffect(() => {
    if (isSuccess) {
      setApiData((prevResults) => ([
        data,
        ...prevResults
      ]));
    }
  }, [data]);
  
  return (
    <div>
    <Header />
    <Search func={get_data}/>
    {isSuccess &&
      apiData && apiData.map((data, index) => (
      <Weather key={index} data={data}/>
    ))}
    {!isSuccess && searchData.length > 0 &&
      <Error />
    }
  </div>
  );
}

export default App;
