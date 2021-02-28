import React, { useState } from 'react';


import Location from '../../Location/Location';
import fakeData from '../../../FakeData/FakeData';


import { Box } from '@material-ui/core';

import { Link } from 'react-router-dom';


const Home = ()=>{


    const location = fakeData.slice(0, 10);
    const [locations, setLocations] = useState(location);

    // const [placeDetail, setPlaceDetail] = useState([]);

   const [bookingDetails, setBookingDetails] = useState([]);



    const handleLocation = (location) => {

        console.log('showlocation', location);
        const newBookingDetails = [...bookingDetails, location];
        setBookingDetails(newBookingDetails);
    }





    let placeD = '';
    for (let i = 0; i < bookingDetails.length; i++) {
        const location = bookingDetails[i];
        placeD = location.detail;
    }

    let placeName = '';
    for (let i = 0; i < bookingDetails.length; i++) {
        const location = bookingDetails[i];
        placeName = location.name;
    }

    let bookingButton = '';
    for (let i = 0; i < bookingDetails.length; i++) {
        const location = bookingDetails[i];
        bookingButton = <Link to={"/bookingDetail"}><button className="button">Booking</button></Link>;
       console.log(bookingButton);
    }

    return (
        <div>
            <div style={{ marginLeft: "100px", float: "left" }}>
                <h1 style={{ color:"white"}}> {placeName} </h1>
                <Box style={{ height: "100px", width: "400px", color:"white" }}> {placeD} <br/>
   
              {bookingButton}

            </Box>
           
            </div>

            <div style={{ display: "flex", float: "right" }}>

                {

                    locations.map(location => <Location
                        handleLocation={handleLocation}
                        location={location}>

                    </Location>)
                }
                
        


            </div>
        </div>


    );
};

export default Home;