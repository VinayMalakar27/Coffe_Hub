import React from 'react';
import img4 from './assets/imgbox2.jpg';
import img5 from './assets/imgbox3.jpg';
import img6 from './assets/imgbox6.jpg';
import img7 from './assets/imgbox7.jpg';
import img8 from './assets/imgbox5.jpg';
import img9 from './assets/payment.png';
import Categorie from './Categorie';
import CardData from './CardData';
import Cardbuddy from './Cardbuddy';
import Cardblog from './Cardblog';
import { Logodata } from './Logodata';
import { Imageslider } from './Imageslider';

function Home() {
    return (
        <>
            <Imageslider />
            <div className="container-fluid pt-4" >
                <div className="row">
                    <CardData />
                </div>
            </div>
            <div class="heading d-flex align-items-center justify-content-center">
                <h1>Top Categories</h1>
            </div>
            <Categorie />
            <div class="heading ">
                <h1>Top Products</h1>
            </div>
            <div class="container-fluid boxes">
                <div class="row d-flex align-items-center justify-content-center" style={{ marginLeft: '0px', marginRight: '0px', marginTop: '12px' }}>
                    <div class="col-lg-3 col-md-6 col-sm-12 box2" style={{ backgroundColor: '#caa36f' }}>
                        <button class="btn">Featured</button>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 box2">
                        <button class="btn">Oldest</button>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 box2">
                        <button class="btn">Latest</button>
                    </div>
                </div>
            </div>
            <Cardbuddy />
            <section class="py-2 w-100 " >
                <div className="row px-0 " style={{ marginTop: '50px' }}>
                    <div className="col-lg-3">
                        <div className="row ">
                            <div className="col-md-12 mb-4 ">
                                <img src={img4} alt="" className="img-fluid " style={{ height: '350px', width: '400px' }} />
                            </div>
                            <div className="col-md-12 mb-4">
                                <img src={img5} alt="" className="img-fluid" style={{ height: '350px', width: '400px' }} />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="row">
                            <div className="col-md-12">
                                <img src={img6} alt="" className="img-fluid" style={{ height: '724px', width: '800px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <img src={img7} alt="" class="img-fluid" style={{ height: '350px', width: '400px' }} />
                            </div>
                            <div className="col-md-12 mb-4">
                                <img src={img8} alt="" className="img-fluid" style={{ height: '350px', width: '400px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            <div class="heading">
                <h1>Special Products</h1>
            </div>
            <Cardbuddy />
            <div class="heading">
                <h1>Latest Blog</h1>
            </div>
            <Cardblog />
            <Logodata />
            <section style={{ backgroundColor: '#caa36f', marginTop: '60px' }}>
                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <footer class="row">
                        <div class="col-lg-3  col-md-6 col-sm-12 footer">
                            <h2>CANTACT INFO</h2>
                            <div class="p-tag" style={{ marginLeft: '8px' }}>
                                <p>Address:- Bhawarkuaa Indore <br />Madhya pradesh</p>
                                <p>phone:- 9131222635</p>
                                <p>Toll Free:- 1800-800-43</p>
                                <p>Email:- vinaymalakar576@gmail.com</p>
                            </div>
                            <div class="social">
                                <i class="ri-instagram-line" style={{ color: '#ee2a7b' }}></i>
                                <i class="ri-facebook-circle-line" style={{ color: '#1877F2' }}></i>
                                <i class="ri-twitter-fill" style={{ color: ' #1DA1F2' }}></i>
                                <i class="ri-youtube-line" style={{ color: ' #CD201F' }}></i>
                            </div>
                        </div>
                        <div class="col-lg-3  col-md-6 col-sm-12 footer">
                            <h2>INFORMATION</h2>
                            <div class="p-tag" style={{ marginLeft: '6px' }}>
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                                <a href="#">Blog</a>
                                <a href="#">Services</a>
                            </div>
                        </div>
                        <div class="col-lg-3  col-md-6 col-sm-12 footer">
                            <h2>MY ACCOUNT</h2>
                            <div class="myaccount">
                                <p> Account</p>
                                <p>order history</p>
                                <p>Wish List</p>
                                <p>New Latter</p>
                            </div>
                        </div>
                        <div class="col-lg-3  col-md-6 col-sm-12 footer">
                            <h2>NEWLATTER</h2>
                            <div class="newslatter">
                                <p>Explore the art of roasting your own coffee beans at home</p>
                                <p>Enter e-mail here</p>
                                <input type="email" placeholder="email" /><br />
                                <button class="submit">Submit</button>
                            </div>
                            <img class="pay-img" src={img9} style={{ margin: '10px 19px' }} alt="" />
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}
export default Home;
