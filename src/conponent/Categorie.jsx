import React from 'react';
import { CategorieData } from '../data/dummy';

const Categorie = () => {
    return (
        <>
        <div className="container-fluid d-flex">
            {
                CategorieData.map((item, index) => (               
                        <div className="categories align-items-center justify-content-center" key={index}>
                            <div className='imges' > 
                                <img src={item.imgsrc} className="img-thumbnail" alt="..." /> 
                                <div className="img-item">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>               
                ))
            }
             </div>
        </>
    );
}

export default Categorie;
