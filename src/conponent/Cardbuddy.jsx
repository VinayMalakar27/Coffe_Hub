import React from 'react'
import { Carditem } from '../data/dummy';

export const Cardbuddy = () => {
    return (
        <>
            <div class="container-fluid cards" >
                <div class="row d-flex align-items-center justify-content-center" style={{ marginLeft: '0px', marginRight: '0px' }}>

                    {
                        Carditem.map((item, index) =>
                        (

                            <div class="col-lg-3  col-md-6  col-sm-12 card" key={index}>
                                <img src={item.cardsrc} alt=""/>
                                <h1 class={item.cardisclass}><span>{item.cardis}</span></h1>
                                <div class="rating">
                                    <i className={item.staricon1}></i>
                                    <i className={item.staricon2}> </i>
                                    <i className={item.staricon3}></i>
                                    <i className={item.staricon4}></i>
                                    <i className={item.staricon5}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <div class="price">
                                    <i className={item.lockstar}></i>
                                    <h5><strike style={{ fontSize: '16px' }}>$14.50</strike> $5.50</h5>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}

export default Cardbuddy;

