import React from 'react'
import './db.css'
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import GaugeChart from 'react-gauge-chart'
import GaugeComponent from 'react-gauge-component'


const DB = () => {
  return (
    <div className='DB-main'>
      <div>
        <h1> hi prithiv</h1>
      </div>
      <div className='one'>
          <div className='one-1'>
            <h1>hai</h1>
            {/* <gauge/>
             */}
             <GaugeChart id="gauge-chart1" percent={0.6} />
             
             

           
           
          </div>

          <div className='one-2'>
          <h1>HELLO</h1>
          </div>

          <div className='one-3'>
          <h1>hai</h1>

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

        </div>
        <div className='two-3'>

        </div>

      </div>

    </div>
  )
}
const gauge=()=>{
  <GaugeChart id="gauge-chart1" percent={0.5} />
}

export default DB