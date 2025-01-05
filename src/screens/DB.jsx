import React, { useState, useEffect } from 'react';
import './db.css';
import cal from '../imges/fire.gif';
import foot from '../imges/runer-silhouette-running-fast.png';
import GaugeChart from 'react-gauge-chart';
import hrt from '../imges/heartbeat.gif';
import { authenticateFitbit, fetchFitbitActivities } from './Connect';

const DB = () => {
  const [heartRate, setHeartRate] = useState(75);
  const [activities, setActivities] = useState(null); 
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFitbitActivities(date);
        console.log(data);
        setActivities(data); // Update activities with the fetched data
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      console.log("Fetching Fitbit activities...");
      fetchData();
    }, 30 * 60 * 1000); 

    return () => clearInterval(interval);
  }, [date]);

  const handleConnectFitbit = () => {
    authenticateFitbit();
  };


return (
    <div className='DB-main'>
      <div style={{display:"flex",width:"100%",alignItems:"flex-start"}}>
        <h1> Hello , Prithiv Raj</h1>
      </div>
      <div className='one'>
          <div className='one-1'>
            
            <img src={cal} height={130} width={130}/>
             
             
             

           
           
          </div>

          <div className='one-2'>
          <div style={{height:"8%",marginTop:'-10px',width:"100%",marginLeft:"10px",marginBottom:"10px"}}>
              <h3>Macros</h3>
              </div>
              <div className='one-gauge'>
                <div style={{height:"100%"}}>
                <Gauge width={150} height={150} value={60}  sx={{
        '& .MuiGauge-valueArc': {
          fill: '#7400b8', // Value arc color
        },
        '& .MuiGauge-referenceArc': {
          fill: '#d3d3d3', // Reference arc color
        },
        '& .MuiGauge-valueLabel': {
          fill: '#7400b8', // Value text color
          fontSize: '24px', // Optional font size customization
        },
      }} />
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
            <img style={{height:"60px",width:"60px"}} src={hrt}/>
              <p>Heart Rate</p>
              {/* <h3></h3> */}
            {/* <img style={{marginTop:"20px", marginLeft: "135px", height: "50px", width: "50px" }} src={heartbeatImage} alt="Heartbeat" />
            <h3 style={{marginLeft:"115px"}}>Heart Rate</h3>  {/* Display mock heart rate */}
            <h3 style={{}}>{heartRate} bpm</h3>  
            </div>
            <div className='two-1-2'>
              {/* <h3>Step Count</h3> */}
              
              
              <img style={{height:"60px",width:"60px"}} src={foot}/>
              <p>Steps</p>
              <h3>300 m</h3>
              
            
              

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
  height: 250,
}
