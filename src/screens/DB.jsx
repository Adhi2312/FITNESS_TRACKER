import React from 'react'
import './db.css'
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import GaugeChart from 'react-gauge-chart'
import GaugeComponent from 'react-gauge-component'
import { Chart } from "react-google-charts";



const DB = () => {
  return (
    <div className='DB-main'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-start",marginLeft:"100px"}}>
        <h1> Hello , Prithiv Raj</h1>
      </div>
      <div className='one'>
          <div className='one-1'>
            <h3>hai</h3>
            {/* <gauge/>
             */}
             <GaugeChart id="gauge-chart1" percent={0.6} />
             
             

           
           
          </div>

          <div className='one-2'>
          <h3>HELLO</h3>
          </div>

          <div className='one-3'>
          <h3>hai</h3>

          </div>
      </div>

      <div className='two'>
        <div className='two-1'>
            <div className='two-1-1'>

            </div>
            <div className='two-1-2'>

            </div>
        </div>
        <div className='two-2'>
              <div style={{height:"10%",width:"100%",marginLeft:"10px"}}>
              <h3>Caloric Balance: Intake vs Burn Rate</h3>
              </div>
              <div style={{height:"80%",width:"100%",backgroundColor:"blue"}}>
                  <LineChart/>
              </div>
              
              {/* <LineChart/> */}
        </div>
        <div className='two-3'>

        </div>

      </div>

    </div>
  )
}
const LineChart=()=>{
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
    <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    // </div>
  );
}

export default DB