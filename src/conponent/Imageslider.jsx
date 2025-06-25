import React from 'react';
import { carousel } from '../data/dummy';

export const Imageslider = () => {
  return (
    <div className="slider">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner s-img">
          {
            carousel.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={item.slidersrc} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-flex justify-content-center align-items-center">
                  <h4>{item.title} <br/> {item.text}</h4>
                  <button className="slider-btn">{item.sliderbtn}</button>
                </div>
              </div>
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
