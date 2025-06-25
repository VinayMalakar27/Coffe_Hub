import React from 'react'
import {data} from '../data/dummy';

const CardData = ()=> {

  return (
    <>
          {
            data.map((item, index) => {
              return (
                  <div class="col-lg-3 col-md-3" key={index}>
                    <div class="card card-services mb-3" style={{backgroundColor: '#fff'}}>
                        <div class="row g-0">
                            <div class="col-md-4 Service-icon d-flex align-items-center justify-content-center">
                                 <i className={item.iconClass}></i>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body Service-contact">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  )
                })
          }

    </>
  )
}

export default CardData;
