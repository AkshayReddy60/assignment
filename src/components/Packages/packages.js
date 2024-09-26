import React from "react";
import './packages.css';
import resort from '../../assets/resort.png';
import hotel from '../../assets/hotel.png';
import cottage from '../../assets/cottage.png';
import villas from '../../assets/villas.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Packages(){
    return(
        <>
        <div className="bigg" id="packages">

        <p classname="pacakagehead">Browse by Property Type</p>
        </div>
        <p className="packpara">Discover Your Favourite Location, Discover Your Favourite Location,Discover Your Favourite Location,Discover Your Favourite Location,</p>
       
        <div className="imagesssalll">
            <img src={resort} className="resorttt" alt="resort"/>
            <img src={hotel} className="hotellll" alt="hotel"/>
            <img src={cottage} className="cottagee" alt="cottage"/>
            <img src={ villas} className="villass" alt='villas'/>



        </div><br/>
        <div className="offers">
            <h1 color="black">Exclusive Offers for You</h1><br/>

        </div>
        <div className="cardagain">
            <Card className="cardgain">
                <CardContent className="cardddddagin">
                   <h3>HONEYMOON 10% off</h3> <br/>
                   <p>Lorem ipsum rent intraluna saskapet, har sor. Nin spen,nis prektig fade. Astrorade inaskad polying edor ar jugt.Ogt georall et fagyng.Ssjesamma infrana,Liksom spena.</p>
                   <br></br>
                   <hr/><br></br>
                   <div className="code-and-button">
                    <p className="copen">NEWPACK50</p>
                    <button className="buttttttttt">Copy Now</button>
                  </div>
                </CardContent>

            </Card>
            <Card className="cardgain">
                <CardContent className="cardddddagin">
                <h3>HONEYMOON 10% off</h3> <br/>
                <p>Lorem ipsum rent intraluna saskapet, har sor. Nin spen,nis prektig fade. Astrorade inaskad polying edor ar jugt.Ogt georall et fagyng.Ssjesamma infrana,Liksom spena.</p>
                <br></br>
                <hr/><br/>
                
                <div className="code-and-button">
                    <p className="copen">NEWPACK50</p>
                    <button className="buttttttttt">Copy Now</button>
                  </div>
                </CardContent>

            </Card>
            <Card className="cardgain">
                <CardContent className="cardddddagin">
                <h3>HONEYMOON 10% off</h3> <br/>
                <p>Lorem ipsum rent intraluna saskapet, har sor. Nin spen,nis prektig fade. Astrorade inaskad polying edor ar jugt.Ogt georall et fagyng.Ssjesamma infrana,Liksom spena.</p>
                <br></br>
                <hr/><br/>
                <div className="code-and-button">
                    <p className="copen">NEWPACK50</p>
                    <button className="buttttttttt">Copy Now</button>
                  </div>

                </CardContent>

            </Card>


        </div><br/><br/>
        </>
    )
}
export default Packages;