import React from "react";
import './aboutus.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ooty from '../../assets/ooty.png'
import kadaikanal from '../../assets/kodaikanal.png';
import chickmagalur from '../../assets/chickmagalur.png';
import coorg from '../../assets/coorg.png';
import valparai from '../../assets/valparai.png';
import wayanad from '../../assets/wayanad.png';

function Aboutus() {
    const [destination, setDestination] = React.useState('');
    const [persons, setPersons] = React.useState('');

    const handleChange = (event) => {
        setDestination(event.target.value);
    };

    const handlePersonsChange = (event) => {
        setPersons(event.target.value);
    };

    return (
        <>
            <Card className="cardd">
                <CardContent className="cardcon">
                    <div className="select-container">
                        {/* Dropdown for Destination */}
                        <FormControl fullWidth className="select-item">
                            <InputLabel id="destination-label">Destination</InputLabel>
                            <Select
                                labelId="destination-label"
                                id="aboutus"
                                value={destination}
                                label="Destination"
                                onChange={handleChange}
                                className="dropdownn"
                            >
                                <MenuItem value="OOTY">OOTY</MenuItem>
                                <MenuItem value="KODAIKANAL">KODAIKANAL</MenuItem>
                                <MenuItem value="VALPARAI">VALPARAI</MenuItem>
                                <MenuItem value="COORG">COORG</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Dropdown for No of Persons */}
                        <FormControl fullWidth className="select-item">
                            <InputLabel id="personss">No of Persons</InputLabel>
                            <Select
                                labelId="personss"
                                id="persons"
                                value={persons}
                                label="No of Persons"
                                onChange={handlePersonsChange}
                                className="dropdownn"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    
                    <button className="buttttt">Search</button>
                    </div>
                    

                </CardContent>
            </Card>
            <div className="content">
                <h1>Discover Your Favourite Location</h1>
                <p>we can assist you with your innovations and commercialisation journy! We can assist you innovation</p>

            </div>
            <div className="allimages">
                    <img src={ooty} className="allsize" alt=''/>
                    <img src={kadaikanal} className="allsize" alt=''/>
                    <img src={valparai} className="allsize" alt=''/>
                    <img src={chickmagalur} className="allsize" alt=''/>
                    <img src={coorg} className="allsize" alt=''/>
                    <img src={wayanad} className="allsize" alt=''/>

            </div>
        </>
    );
}

export default Aboutus;
