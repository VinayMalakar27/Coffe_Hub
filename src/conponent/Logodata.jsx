import React from 'react';
import { Sliderlogo } from '../data/dummy';

export const Logodata = () => {
  return (
    <div className=" row container-fluid" style={{ margin: '15px 20px' }}>
      <div className="logos">
        <div className="logoslider">
          {
            Sliderlogo.map((item, index) => (
              <img key={index} src={item.logosrc} alt="" />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Logodata;
