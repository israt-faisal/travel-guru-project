import React from 'react';

const HotelDetail = (props) => {

    
    const [id, title, dollar] = [props.hotelDetail];
    return (
        <div>
            <h2>{id}</h2>
            <h1> Title: {title}</h1>
            <h3>{dollar}</h3>
            
        </div>
    );
};

export default HotelDetail;