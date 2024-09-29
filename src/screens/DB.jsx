import React, { useState } from 'react';
import './db.css'
import GaugeChart from 'react-gauge-chart'
import GaugeComponent from 'react-gauge-component'
import { Chart } from "react-google-charts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faShoePrints } from '@fortawesome/free-solid-svg-icons';                                
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { HeartbeatIndicator, StepIndicator } from '../HeartbeatStep.js';
import ArcDesign from '../ArcDesign.js';



const DB = () => {
  const [steps, setSteps] = useState(4500);       
  const [heartRate, setHeartRate] = useState(75);
  return (
    <div className='DB-main'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-start"}}>
        <h1> Hello , Prithiv Raj</h1>
      </div>
      <div className='one'>
          <div className='one-1'>
            <h3>hai</h3>
            {/* <gauge/>
             */}
             <div style={{marginLeft:"65px"}}><ArcDesign/></div>
             
          </div>

          <div className='one-2'>
          <div style={{height:"8%",marginTop:'-10px',width:"100%",marginLeft:"10px",marginBottom:"10px"}}>
              <h3>Macros</h3>
              </div>
              <div className='one-gauge'>
                <div style={{height:"100%"}}>
                <Gauge width={150} height={150} value={60} />
                <p>Protein</p>
                </div>
                <div style={{height:"100%"}}>
                <Gauge width={150} height={150} value={60} />
                <p>Carbs</p>
                </div>
                <div style={{height:"100%"}}>
                <Gauge width={150} height={150} value={60} />
                <p>Fats</p>
                </div>
                  {/* <Linechart/> */}
                  
              </div>
          </div>

          <div className='one-3'>
          <h3>hai</h3>

          </div>
      </div>

      <div className='two'>
        <div className='two-1'>
        <div className='two-1-1'>
            <HeartbeatIndicator />
            <h3 style={{marginLeft:"15px"}}>Heart Rate: {heartRate} bpm</h3>  {/* Display mock heart rate */}
          </div>
          <div className='two-1-2'>
            <StepIndicator />
            <h3 style={{marginLeft:"15px"}}>Steps: {steps}</h3>  {/* Display mock steps */}
          </div>
        </div>
        <div className='two-2'>
              <div style={{height:"10%",width:"100%",marginLeft:"10px"}}>
              <h3>Caloric Balance: Intake vs Burn Rate</h3>
              </div>
              <div style={{height:"80%",width:"100%",marginTop:"-15px"}}>
                  <Linechart/>
              </div>
              
              {/* <LineChart/> */}
        </div>
        <div className='two-3'>

        </div>

      </div>

    </div>
  )
}
const Linechart=()=>{
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
  const options = {
    // title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
  // <GaugeChart id="gauge-chart1" percent={0.5} />
  return (
    // <div>
    <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      color: "#ff5a5a",
    
    }
    ,
    {
      data: [3, 7, 8 , 5, 5, 1],
      color:'#8f8f',
    
    }
  ]}
  width={600}
  height={350}
/>
  
  );
}

export default DB