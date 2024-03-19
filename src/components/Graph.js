import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width } = windowSize;

  const barChartData = [
    { name: 'January', sales: 1000, expenses: 800 },
    { name: 'February', sales: 1200, expenses: 850 },
    { name: 'March', sales: 1400, expenses: 900 },
    { name: 'April', sales: 1600, expenses: 950 },
    { name: 'May', sales: 1800, expenses: 1000 },
    { name: 'June', sales: 2000, expenses: 1050 },
    { name: 'July', sales: 2200, expenses: 1100 },
  ];

  const lineChartData = [
    { name: 'January', revenue: 1000 },
    { name: 'February', revenue: 1100 },
    { name: 'March', revenue: 1250 },
    { name: 'April', revenue: 1400 },
    { name: 'May', revenue: 1300 },
    { name: 'June', revenue: 1550 },
    { name: 'July', revenue: 1600 },
  ];

  const chartWidth = Math.min(width * 0.8, 600);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', margin: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Sales and Expenses Chart</h2>
        <BarChart width={chartWidth} height={300} data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="expenses" fill="#82ca9d" />
        </BarChart>
      </div>

      <div style={{ flex: '1', margin: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Revenue Trends</h2>
        <LineChart width={chartWidth} height={300} data={lineChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
