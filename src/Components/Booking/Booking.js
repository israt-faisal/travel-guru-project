
import React, { useState } from 'react';

import fakeData from '../../FakeData/FakeData';
// import HotelDetail from './HotelDetail';


const Booking = () => {

    const booking = fakeData;
    

  
   
    const [bookings, setBookings] = useState([booking]);


    // let hotel = '';
    // for (let i = 0; i < hotelBooking.length; i++){
    //     const location = hotelBooking[i];
    //     hotel = location.hotels;
    // }
    return (
        <div>
          
             {/* {
                 bookings.find(book => <HotelDetail
                 key={book.hotels}
                 hotelDetail={book.hotels}>
                 </HotelDetail>

                 )
                 } */}
        </div>
    );
  

};

export default Booking;