import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WellPressureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 21 }, (_, i) => i * 1), // x-axis from 0 to 20
        datasets: [
            {
              label: 'DP Pressure',
              data: [0, 1000, 500, 1500, 700, 1200, 3000, 2500, 4000, 2000, 3500, 1500, 3000, 1000, 2000, 500, 1000, 0, 500, 1000, 0],
              borderColor: 'lime',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'BHP Calculated',
              data: [0, 800, 400, 1200, 600, 1600, 1000, 2000, 2400, 1800, 3200, 1200, 3600, 800, 4000, 600, 2400, 0, 1200, 800, 0],
              borderColor: 'yellow',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'Choke Pressure',
              data: [0, 600, 300, 900, 450, 1200, 1500, 1800, 2100, 1600, 2400, 1200, 2700, 900, 3000, 600, 1500, 0, 900, 600, 0],
              borderColor: 'orange',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'Choke Open %',
              data: [0, 20, 10, 40, 20, 60, 30, 80, 40, 90, 50, 100, 60, 80, 70, 50, 40, 30, 20, 10, 0],
              borderColor: 'cyan',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'Kick Volume',
              data: [0, 2, 1, 4, 2, 6, 3, 8, 4, 9, 5, 10, 6, 8, 7, 5, 4, 3, 2, 1, 0],
              borderColor: 'red',
              fill: false,
              tension: 0.4,
            },
          ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Depth (ft)'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Pressure/Rate/Volume'
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#ffffff'
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="container-fluid text-light p-3" style={{ backgroundColor: '#000', borderRadius: '10px', height: 830 }}>
      <div className="card" style={{ backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '15px', height: 800 }}>
        <div className="card-body">
          <div style={{ position: 'relative', height: '740px' }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellPressureChart;
