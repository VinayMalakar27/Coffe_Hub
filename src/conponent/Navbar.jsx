import React from 'react'
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <main>
        <nav className="navbar navbar-dark bg-dark " aria-label="Dark offcanvas navbar">
          <div className="container-fluid text">
            <a className="navbar-brand " href="/">Aeromatic Energic Retial</a>
          </div>
        </nav>
        
        <div className=" bg-light text-white secound-nav">
        <div class="header2">
                <div class="header-box">
                    <div class="d-flex" >
                        <i class="fas fa-headset" style={{ fontSize: '70px', opacity: 0.8 }}></i>
                        <div style={{ lineHeight: '11px', marginTop: '19px', marginLeft: '17px' }}>
                            <p>1800-800-112</p><br/>
                            <p>Costomer Care</p>
                        </div>
                    </div>
               </div>
                <div class="header-box">
                    <div class="d-flex">
                        <div class="logo" style={{ display: 'flex' }}>
                            <img src={logo} style={{ height: '45px', width: '70px' }} alt=""/>
                            <h2>CoffeHub</h2>
                        </div>
                    </div>
                </div>
                <div class="header-box">
                    <div class="d-flex">
                        <div class="usericon"  style={{ fontSize: '40px', color: '#caa36f' }}>
                           <span class="usericon-1" style={{ margin: '30px', padding: '0 10px', borderRight: '1px solid #cbc3c3c9' }}> <i class="ri-user-add-line"></i>
                        </span>
                           <span claas="usericon-2"> <i class="fas fa-shopping-basket "></i>
                        </span>                        
                        </div>
                    </div>
                </div>
           </div>
        </div> 
        <div className="navbars">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-dark">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/service" className="nav-link active">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Blog" className="nav-link active">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link active">Contact</Link>
                            </li>
                        </ul>
                        <div className="input-serach d-flex ">
                            <form className="d-flex input" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <i className="fas fa-search"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
      </main>
    </>
  )
}
export default Navbar;
