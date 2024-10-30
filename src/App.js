// src/App.js
import React from 'react';
import DrillingDashboard from './DrillingDashboard';
import MainDashboard from './MainDashboard';
import WellPathVisualization from './WellPathVisualization';
import WellPressureChart from './WellChart';

function App() {
  return (
    <div className="container-fluid p-4">
      <div className="row g-3">
        {/* Left Panel */}
        <div className="col-md-8 col-12">
          <MainDashboard />
          <br/>
          <DrillingDashboard />
        </div>

        {/* Central Panel */}
        <div className="col-md-2 col-12">
          <WellPathVisualization />
        </div>

        {/* Right Panel */}
        <div className="col-md-2 col-12">
          <WellPressureChart/>
        </div>
      </div>
    </div>
  );
}

export default App;
