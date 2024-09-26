import React from "react";
import './destination.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import greenpark from '../../assets/greenpark.png';
import ren from '../../assets/ren.png';
import theblackfro from '../../assets/theblackfro.png';
import lux from '../../assets/lux.png';

function Destination() {
    return (
        <>
            <div className="destinationdiv" id="destination">
                <h1 className="headiiing">Top Recommended Properties</h1><br/>
                <div className="tabs">
                    <span className="tab-link">Ooty</span>
                    <span className="tab-link">Kodaikanal</span>
                    <span className="tab-link">Wayanad</span>
                    <span className="tab-link">Munnar</span>
                    <span className="tab-link">Valparai</span>
                    <span className="tab-link">Coorg</span>
                    <span className="tab-link">Chikmagalur</span>
                    <span className="tab-link">Goa</span>
                </div><br/>
                <div className="cardcoooo">
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={greenpark} className="allsizeee" alt='greenpark' />
                            <h3>Green Park View</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={ren} className="allsizeee" alt='Renaldo Villa' />
                            <h3>Renaldo Villa</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={theblackfro} className="allsizeee" alt='The Black Forest' />
                            <h3>The Black Forest</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={lux} className="allsizeee" alt='Mr. Luxury Stay Homes' />
                            <h3>Mr. Luxury Stay Homes</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={greenpark} className="allsizeee" alt='greenpark' />
                            <h3>Green Park View</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                    <Card className='cardddd'>
                        <CardContent className="cardconnnnn">
                            <img src={ren} className="allsizeee" alt='Renaldo Villa' />
                            <h3>Renaldo Villa</h3>
                            <p>Aaa, Ooty<br />upto 2 adults, 4 children, 24hrs</p>
                            <h3>₹9,999</h3>
                        </CardContent>
                    </Card>
                </div><br/>
            </div>
        </>
    );
}

export default Destination;
