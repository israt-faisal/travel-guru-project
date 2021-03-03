
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

import locations from '../../FakeData/FakeData';
import HotelDetail from './HotelDetail';


const Booking = () => {

const {id} = useParams();
  const { bookingInfo } = useContext(UserContext);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const bookingLocation = locations.find(location => location.id.toString() === id)
    setHotels(previousState => ([...previousState, ...bookingLocation.hotels]))
  }, [id])
    
    return (
        <div>
          
            {
                hotels.map(hotel => <HotelDetail key={hotel.id}
                hotel={hotel} ></HotelDetail>)

            }
        </div>
    );
  

};

export default Booking;