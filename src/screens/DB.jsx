import React from 'react'
import './db.css'
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import GaugeChart from 'react-gauge-chart'
import footstep from '../imges/footstep.png'
import GaugeComponent from 'react-gauge-component'
import { Chart } from "react-google-charts";
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge } from '@mui/x-charts/Gauge';



const DB = () => {
  return (
    <div className='DB-main'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-start"}}>
        <h1> Hello , Prithiv Raj</h1>
      </div>
      <div className='one'>
          <div className='one-1'>
            
          <div style={{height:"8%",marginTop:'-10px',width:"100%",marginLeft:"10px",marginBottom:"10px"}}>
              <h3>Calories</h3>
              </div>
              <div className='one-gauge'>
              <GaugeComponent
  type="semicircle"
  arc={{
    colorArray: ['#00FF15', '#FF2121'],
    padding: 0.02,
    subArcs: [{ limit: 40 }, { limit: 60 }, { limit: 70 }]
  }}
  pointer={{ type: "blob", animationDelay: 0 }}
  value={50}
/>

                </div>
             
             
             

           
           
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
          
          <h3>BMI</h3>
          {/* <GaugeChart id="gauge-chart1" percent={0.6} />
           */}
<GaugeChart id="gauge-chart5"
  nrOfLevels={3}
  // arcsLength={[0.5, 0.5, 0.5]}
  colors={['#5BE12C', '#F5CD19', '#EA4228']}
  percent={0.4}
  arcPadding={0.02}
/>
          </div>
      </div>

      <div className='two'>
        <div className='two-1'>
            <div className='two-1-1'>

            </div>
            <div className='two-1-2'>
              {/* <h3>Step Count</h3> */}
              <h3>Step Count</h3>
              <div style={{display:"flex",flexDirection:"column",padding:"20px",alignItems:"center"}}>
              <img style={{height:"80px",width:"80px"}} src={footstep}/>
              <h3>3000</h3>
              </div>
              

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
    // </div>
  );
}

export default DB
const chartStyle = {
  height: 250,
}