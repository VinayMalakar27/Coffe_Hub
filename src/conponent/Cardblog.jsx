import React from 'react'
import { Belogdata } from '../data/dummy';


export const Cardblog = ()=> {
  return (
    <>
    
      <div class="row d-flex align-items-center justify-content-center" style={{marginTop: '20px'}}>

        {
          Belogdata.map((item, index) =>
          (
            <div class="col-lg-3  col-md-6 col-sm-12 blog-card" key={index}>
              <img src={item.blogsrc} class="card-img-top" alt="..." />
              <div class="card-body body-item">
                <h5 class="card-title"> {item.title} </h5>
                <p class="card-text"> {item.text} </p>
                <button class="btn"> {item.blogbtn} </button>
              </div>
            </div>

          ))

        }
      </div>
      
    </>
  )
}

export default Cardblog;