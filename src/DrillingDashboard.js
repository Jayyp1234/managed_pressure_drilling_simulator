import React from 'react';
import { FaTachometerAlt, FaBolt, FaWater, FaPercent, FaExclamationTriangle, FaCogs, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './DrillingDashboard.css';

const DrillingDashboard = () => {
  return (
    <div className="container-fluid text-light p-3" style={{ backgroundColor: '#2c2c2c', borderRadius: '10px' }}>
      <div className="row">
        <div className="col-6">
          <div className="d-flex justify-content-between">
            <span className="text-success"><FaTachometerAlt /> DP Pressure</span>
            <span className="fw-bold">3672 <span className="text-muted">psi</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-warning"><FaBolt /> BHP Calculated</span>
            <span className="fw-bold">5631 <span className="text-muted">psi</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-danger"><FaWater /> Choke Pressure</span>
            <span className="fw-bold">607 <span className="text-muted">psi</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-info"><FaPercent /> Choke Open</span>
            <span className="fw-bold">36.77 <span className="text-muted">%</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-danger"><FaExclamationTriangle /> Kick Volume</span>
            <span className="fw-bold">3.41 <span className="text-muted">bbl</span></span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-between">
            <span className="text-success"><FaCogs /> Rotary Torque</span>
            <span className="fw-bold">42.8 <span className="text-muted">%</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-warning"><aGgCircle /> Drilling Rate</span>
            <span className="fw-bold">98.5 <span className="text-muted">ft/h</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-danger"><FaTachometerAlt /> BPP + RPD Flow</span>
            <span className="fw-bold">0.0 <span className="text-muted">gpm</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-info"><FaArrowUp /> Flow In</span>
            <span className="fw-bold">501.9 <span className="text-muted">gpm</span></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-danger"><FaArrowDown /> Flow Out</span>
            <span className="fw-bold">805.9 <span className="text-muted">gpm</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillingDashboard;