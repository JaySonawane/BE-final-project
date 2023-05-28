import Navbar from "./Navbar";



import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,

} from "mdb-react-ui-kit";
import axios from 'axios';



import { useState,useEffect } from "react";



const API_KEY='f2ffd78139mshb9d1ae88a54cbc8p1706e6jsn3e5a3020db5b';


const Weather=()=>
{
  const [weather_hourly,setweather_hourly]=useState({});
  const [weather_current,setweather_current]=useState({});

  useEffect(()=>
  {
    const fetchweather_current=async ()=>
    {
  
      try{
        const API_URL = 'https://ai-weather-by-meteosource.p.rapidapi.com/current?place_id=pune&timezone=auto&language=en&units=auto';
        const response=await axios.get(API_URL,
          {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
            },
          });
 
        setweather_current(response.data);
      }
      catch(error){
     console.log(error);
      }
    };
    const fetchweather_hourly=async ()=>
    {
     
      try{
        const API_URL = 'https://ai-weather-by-meteosource.p.rapidapi.com/hourly?place_id=pune&timezone=auto&language=en&units=auto';
        const response=await axios.get(API_URL,
          {
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com',
            },
          });
    
        setweather_hourly(response.data);
      }
      catch(error){
     console.log(error);
      }
    }
    fetchweather_hourly();
    fetchweather_current();
  },[])
  const hourly_arr=weather_hourly?.hourly?.data;
  const temp=weather_current?.current?.temperature;
  const Humidity=weather_current?.current?.humidity;
  const pressure=weather_current?.current?.pressure;
  const summary=weather_current?.current?.summary;
  console.log(pressure,Humidity);
  return(
  <div>
          
  <section style={{ backgroundColor: "#C1CFEA",height:"575px" }}>
    <MDBContainer className="h-100">
      <MDBRow
        className="justify-content-center align-items-center h-100 d-flex"
        style={{ color: "#282828" }}
      >
        <MDBCard
          className="mb-4 gradient-custom"
          style={{ borderRadius: "25px" }}
        >

          <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2" style={{marginLeft:'105px'}}>
                  <div>
                    <p className="h2 mb-1">Pune</p>
                    {summary && (
  <p className="mb-1 text-muted mb-0">{summary}</p>
)}                 {temp && 
                    (<h2 className="display-2">
                      <strong>{temp}</strong>
                    </h2>)
}
                    {pressure && (
  <span className="text-muted mb-0">Pressure:{pressure} hPa</span>
)}
                    <span className="mx-2">|</span>
                    {Humidity && (
  <span className="text-muted mb-0">Hummidity:{Humidity}%</span>
)}
                    
                    
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                      width="150px"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  
                  {
                      hourly_arr && hourly_arr.slice(0,5).map((object,index)=>(

  
          <div className="flex-column">
                    <p className="small">
                      <strong>{object.temperature}</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon='sun'
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>{object.date.split("T")[1].slice(0,5)}</strong>
                    </p>
          </div>
         ))
} 
                </div>

                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                    <div className="flex-column">
                    <p className="small">
                      <strong>21°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Mon</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>20°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="sun"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Tue</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>16°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Wed</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>17°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Thu</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="small">
                      <strong>18°C</strong>
                    </p>
                    <MDBIcon
                      fas
                      icon="cloud-showers-heavy"
                      size="2x"
                      className="mb-3"
                      style={{ color: "#ddd" }}
                    />
                    <p className="mb-0">
                      <strong>Fri</strong>
                    </p>
                  </div>
                  
                </div>
          </MDBCardBody>
        </MDBCard>

        
        
       
      </MDBRow>
    </MDBContainer>
  </section>
      </div>
  )
}
export default function Home() {

  const handleRedirect = (src) => {
    
    window.location.href = src;
  };

  const [Object,setobject]=useState({});

  useEffect(()=>
  {
    const fetchnews=async ()=>
    {
      const response=await axios.get('http://localhost:8001/farmer/scrape')
      setobject(response.data);
    }
    fetchnews();
  },[])
  
  const news=Object?.news;
  if(news)
  {
    return (
    <div>
    <Navbar />
    <Weather />
    <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-black' style={{marginTop:"30px"}}>
              <h1 className='mb-3' style={{textDecoration: 'underline 5px red' }}>News Archives</h1>
            </div>
    </div>
    <div>
    {
    news.map((object,index)=>(
    <MDBContainer className="py-5" style={{ marginLeft: '20%' }}>
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-4" style={{ width: '200px' }}>
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={object.img_src}
              //className="w-100"
              style={{ width: '150px' ,height:'150px' }}
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            News of the day
          </span>
          <h4>
            <strong>{object.title}</strong>
          </h4>
          <p className="text-muted">
          </p>
          <MDBBtn onClick={()=>handleRedirect(object.source)}>Read More</MDBBtn>
        </MDBCol>
      </MDBRow>
      <hr></hr>
    </MDBContainer>
    
  ))}
  </div>
  </div>)
}
}
