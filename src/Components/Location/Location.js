import React, { useState } from 'react';
import './Location.css';


import Carousel from 'react-bootstrap/Carousel';





const Location = (props) => {
    const { image, name} = props.location;
   

   
   
    

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        
       
        setIndex(selectedIndex);
    };



    return (

    
           
               <Carousel activeIndex={index} onSelect={handleSelect}>

<Carousel.Item>
   
   <img onClick={()=> props.handleLocation(props.location)} className="place-picture"
     src={image}
     alt=""
 />

    <Carousel.Caption>
        <h3>{name}</h3>
       

    </Carousel.Caption>

</Carousel.Item>


</Carousel>

            
           
           






    );
};




export default Location;