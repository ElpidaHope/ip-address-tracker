import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Map from "./components/Map";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global";
import { useState, useEffect, useCallback } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;


function App() {
  const color = {
    veryDarkGray: 'hsl(0, 0%, 17%)',
    darkGray: 'hsl(0, 0%, 59%)'
  }

  const [ipAddress, setIpAddress] = useState('');
  const [searchIp, setSearchIp] = useState('');
  const [loading, setLoading]  = useState(true)
  
  

  const handleSearch = () => {
    setSearchIp(ipAddress);
    setIpAddress('')
  }

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${searchIp}`;

  const [data, setData] = useState({});
  const fetchData = useCallback(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false)})
  },[url])


  useEffect(() => {
    fetchData()
  },[fetchData])
  
  
  return (
    <ThemeProvider theme={color}>
        <GlobalStyle />
        <Header />
        <Map data={!loading && data}/>
        <Tracker ipAddress={ipAddress} setIpAddress={setIpAddress} handleSearch={handleSearch} data={!loading && data}/>
    </ThemeProvider>
  );
}

export default App;
