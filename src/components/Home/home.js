import React from "react";
import './home.css';
import image1 from '../../assets/image1.png';
function Home(){
    return(
    <>
    <div className="background-container" id="home">
    <img src={image1} className='background' alt=''/>
    <div className="text-container">
    <span className="hometext">Plan Your Dreams Holiday With Histay</span>
    <button className="buttonn"> Book Now</button>
    </div>
    </div>
    
    </>
    )

}
export default Home;
