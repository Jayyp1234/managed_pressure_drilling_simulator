import React , {useEffect, useState} from 'react';
import { RadialGauge } from 'canvas-gauges';
import './MainDashboard.css';

const MainDashboard = () => {
    const [rpm, setRpm] = useState(80); // Default RPM value
    const [spm, setSpm] = useState(100);
    const [strokes, setStrokes] = useState(1409);
    const [activeMp, setActiveMp] = useState(1);
    // Handle RPM Increment
    const handleIncrement = () => {
        setRpm((prevRpm) => Math.min(prevRpm + 10, 100)); // Increase RPM, max is 100
    };

    // Handle RPM Decrement
    const handleDecrement = () => {
        setRpm((prevRpm) => Math.max(prevRpm - 10, 0)); // Decrease RPM, min is 0
    };

    const handleSpmChange = (amount) => {
      setSpm(prev => Math.max(0, prev + amount));
    };
  
    const handleStrokesChange = (amount) => {
      setStrokes(prev => Math.max(0, prev + amount));
    };

    useEffect(() => {
        new RadialGauge({
          renderTo: 'pumpPressureGauge',
          width: 'auto',
          height: 150,
          units: 'psi',
          value: 3705,
          minValue: 0,
          maxValue: 5000,
          majorTicks: ['0', '1000', '2000', '3000', '4000', '5000'],
          minorTicks: 10,
          strokeTicks: true,
          highlights: [
            { from: 3500, to: 5000, color: 'rgba(200, 50, 50, .75)' }
          ],
          colorPlate: '#fff',
          borderShadowWidth: 0,
          borders: false,
          needleType: 'arrow',
          needleWidth: 2,
          needleCircleSize: 7,
          needleCircleOuter: true,
          needleCircleInner: false,
          animationDuration: 1500,
          animationRule: 'linear'
        }).draw();
    
        new RadialGauge({
          renderTo: 'hookLoadGauge',
          width: 'auto',
          height: 300,
          units: 'KIP',
          value: 22.1,
          minValue: 0,
          maxValue: 800,
          majorTicks: ['0', '100', '200', '300', '400', '500', '600', '700', '800'],
          minorTicks: 5,
          strokeTicks: true,
          highlights: [
            { from: 600, to: 800, color: 'rgba(255, 0, 0, .75)' }
          ],
          colorPlate: '#000',
          colorMajorTicks: '#fff',
          colorMinorTicks: '#fff',
          colorTitle: '#fff',
          colorUnits: '#fff',
          colorNumbers: '#fff',
          borderShadowWidth: 0,
          borders: false,
          needleType: 'arrow',
          needleWidth: 2,
          needleCircleSize: 7,
          needleCircleOuter: true,
          needleCircleInner: false,
          animationDuration: 1500,
          animationRule: 'linear'
        }).draw();
    
        new RadialGauge({
            renderTo: 'rotaryTorqueGauge',
            width: 'auto',
            height: 150,
            units: 'psi',
            value: {rpm},
            minValue: 0,
            maxValue: 100,
            majorTicks: ['0', '10', '20', '30', '40', '50', '60', '70','80','90','100'],
            minorTicks: 2,
            strokeTicks: true,
            highlights: [
              { from: 3500, to: 5000, color: 'rgba(200, 50, 50, .75)' }
            ],
            colorPlate: '#fff',
            borderShadowWidth: 0,
            borders: false,
            needleType: 'arrow',
            needleWidth: 2,
            needleCircleSize: 7,
            needleCircleOuter: true,
            needleCircleInner: false,
            animationDuration: 1500,
            animationRule: 'linear'
          }).draw();
          handleStrokesChange();
      }, [rpm]);
  return (
    <div className="container-fluid text-light p-3" style={{ backgroundColor: '#d4b790', borderRadius: '10px', height:600}}>
    <div className="row">
      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card" >
          <div className="">
          <div className="card bit-depth-card" style={{ backgroundColor: '#f0ead6', borderRadius: '10px', padding: '5px' }}>
                <div className="card-body d-flex justify-content-between mb-0 pb-0">
                  <div className="bit-depth-item">
                      <h6 className="text-dark mb-1">Bit Depth</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>9881.44</div>
                      <p className="text-center mt-2" style={{ color: '#000' }}>ft</p>
                  </div>
                  <div className="bit-depth-item">
                      <h6 className="text-dark mb-1">MW IN</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>9.60</div>
                      <p className="text-center mt-2" style={{ color: '#000' }}>ppg</p>
                  </div>
                </div>
            </div>

            <div className="mt-4">
              <h6 className="text-center fw-bold">Pump Pressure</h6>
              <canvas id="pumpPressureGauge" className="w-100"></canvas>
            </div>
            <div className="col-12 col-sm-12 mb-3">
              <div className="card" style={{ backgroundColor: '#f0ead6', borderRadius: '10px' }}>
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-around w-100'>
                      <div className={`mp-indicator ${activeMp === 1 ? 'bg-success' : 'bg-secondary'}`} onClick={() => setActiveMp(1)}></div>
                      <div className={`mp-indicator ${activeMp === 2 ? 'bg-success' : 'bg-secondary'}`} onClick={() => setActiveMp(2)}></div>
                      <div className={`mp-indicator ${activeMp === 3 ? 'bg-success' : 'bg-secondary'}`} onClick={() => setActiveMp(3)}></div>
                    </div>
                  <div className="d-flex justify-content-between align-items-center mt-1">
                    <div className="bit-depth-item">
                      <h6 className="text-dark">SPM</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>{spm}</div>
                    </div>
                    <div className="bit-depth-item">
                      <h6 className="text-dark">Strokes</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>{strokes}</div>
                    </div>
                  </div>
                  <div className="mt-1 d-flex justify-content-center">
                    <button className="btn btn-secondary btn-sm me-2" onClick={() => handleSpmChange(-1)}>-</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => handleSpmChange(1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card text-center" >
          <div className="">
            <h5 className="text-dark">Hook Load</h5>
            <canvas id="hookLoadGauge" className="w-100"></canvas>
            
            <div className="d-flex justify-content-center align-items-center mt-4">
                    <div className="bit-depth-item">
                      <h6 className="text-dark">BHP Setpoint</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>5630 <span className="text-muted">psi</span></div>
                    </div>
                  </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-12 mb-3">
        <div className="card" >
          <div className="card-body">
            <h5 className="text-dark text-center" style={{fontWeight:900}}>MPG SIMULATOR</h5>
            <div className="mt-4 d-flex justify-content-between row align-items-center status-indicators">
                <div className="status-item col-6">
                  <div className="status-light bg-success"></div>
                  <span className="ms-2">DSIT</span>
                </div>
                <div className="status-item col-6">
                  <div className="status-light bg-danger"></div>
                  <span className="ms-2">RCD</span>
                </div>
                <div className="status-item col-6">
                  <div className="status-light bg-secondary"></div>
                  <span className="ms-2">RPD</span>
                </div>
                <div className="status-item col-6">
                  <div className="status-light bg-danger"></div>
                  <span className="ms-2">BPP</span>
                </div>
                <div className="status-item col-6">
                  <div className="status-light bg-primary"></div>
                  <span className="ms-2">Choke</span>
                </div>
                <div className="status-item col-6">
                  <div className="status-light bg-danger"></div>
                  <span className="ms-2">AUTO</span>
                </div>
              </div>
              <div className="d-grid justify-content-between align-items-center">
                <b className="text-dark text-center mb-2">Rotary Torque</b>
                <canvas id="rotaryTorqueGauge" className="w-100"></canvas>
              </div>
              
              <div className="col-12 col-sm-12 mb-3 mt-4">
              <div className="card" style={{ backgroundColor: '#f0ead6', borderRadius: '10px' }}>
                <div className="card-body">
                    
                  <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className="bit-depth-item">
                      <h6 className="text-dark">RPM</h6>
                      <div className="bit-depth-value" style={{ backgroundColor: '#000', color: '#0f0', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>{rpm}</div>
                    </div>
                  </div>
                  <div className="mt-1 d-flex justify-content-center">
                    <button className="btn btn-secondary btn-sm me-2" 
                    onClick={handleDecrement}
                    type="button"
                    disabled={rpm <= 0}
                    >-</button>
                    <button className="btn btn-secondary btn-sm" type="button"
                  onClick={handleIncrement}
                  disabled={rpm >= 100}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MainDashboard;
