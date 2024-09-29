import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
  width: 180,
  height: 180,
  value: 60,
};

export default function ArcDesign() {
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#55FB46',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: '#D9E5D8',
        },
      })}
    />
  );
}
