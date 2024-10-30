import React, { useEffect, useState } from 'react';
import img from './drillbit.png' 

const DrillingSimulation = () => {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDepth((prevDepth) => {
        if (prevDepth < 5000) {
          return prevDepth + 50;
        } else {
          clearInterval(interval);
          return prevDepth;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid text-light p-3" style={{ backgroundColor: '#d4b790', borderRadius: '10px', maxWidth: '1200px', border: '1px solid #444' }}>
      <div className="card" style={{ backgroundColor: '#f0ead6', borderRadius: '10px', padding: '10px', height: 795 }}>
        <div className="card-body" style={{ height: 800 }}>
          <div className="well-path-container" style={{ position: 'relative', height: '750px', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
            <img
              src={img}
              alt="Drill"
              style={{
                position: 'absolute',
                left: '50%',
                top: `${(depth / 5000) * 100}%`,
                background:'black',
                transform: 'translateX(-50%)',
                width: '30px',
                height: 'auto',
              }}
            />
            <div
              className="well-path"
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                transform: 'translate(-50%, 10px)',
                
                width: '20px',
                height: `${(depth / 5000) * 100}%`,
                backgroundColor: '#000',
                transition: 'height 0.1s linear',
              }}
            ></div>
            <div
              className="dug-path"
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                transform: 'translate(-50%, 20px)',
                width: '32px',
                height: `${(depth / 5000) * 100}%`,
                backgroundColor: '#50506194',
                transition: 'height 0.1s linear',
                zIndex: 0,
              }}
            ></div>
            <div className="depth-label" style={{ position: 'absolute', bottom: '0', left: '5px', color: '#000', fontWeight: 'bold' }}>9881 ft</div>
            <div className="depth-label" style={{ position: 'absolute', top: '60%', left: '5px', color: '#000', fontWeight: 'bold' }}>7300 ft</div>
            <div className="depth-label" style={{ position: 'absolute', top: '32%', left: '5px', color: '#000', fontWeight: 'bold' }}>3363 ft</div>
            <div className="depth-label" style={{ position: 'absolute', top: '15%', left: '5px', color: '#000', fontWeight: 'bold' }}>9225 ft</div>
            <div className="depth-label" style={{ position: 'absolute', top: '8%', left: '5px', color: '#000', fontWeight: 'bold' }}>8897 ft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillingSimulation;
