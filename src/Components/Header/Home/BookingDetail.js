import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import logo from '../../../Icon/Logo.png';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import './BookingDetail.css';
import header from '../../../Image/Coxs.png';
import 'date-fns';
import Card from 'react-bootstrap/Card';
import locations from '../../../FakeData/FakeData';



import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Box } from '@material-ui/core';

const BookingDetail=()=>{
   const bookingDetail = locations;

    let placeName = '';
    for (let i = 0; i < bookingDetail.length; i++) {
        const location = bookingDetail[i];
        placeName = location.name;
    }
    let bookingButton = '';
    for (let i = 0; i < bookingDetail.length; i++) {
        const location = bookingDetail[i];
        bookingButton = <Link to={"/booking"}>
            <button style={{backgroundColor:"orange",marginTop:"3px",borderRadius:"5px", border:"solid gray 1px", width:"380px", height:"50px"}}> 
            Start Booking</button></Link>;
       
    }
   
    


    const [selectedDate1, setSelectedDate1] = React.useState(new Date('2020-01-01'));
    const [selectedDate2, setSelectedDate2] = React.useState(new Date('2021-01-31'));

    const handleDateChange1 = (date1) => {
      setSelectedDate1(date1);
    };
    const handleDateChange2 = (date2) => {
        setSelectedDate2(date2);
    };
  



    return (
         <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${header})` }} className="header">

<nav className="nav">
    <ul>
        <li>
            <img className="logo" src={logo} alt="" />
        </li>

        <li>
            <InputGroup>
                <SearchSharpIcon style={{ color: "white", fontSize: 40, marginTop:"30px" }}></SearchSharpIcon>
                <div className="search">
                <FormControl

                    type="text"
                    placeholder="Search Your Destination.."
                />
                </div>

            </InputGroup>
        </li>


        <li>
            <Link href="/news">News</Link>
        </li>
        <li>
            <Link href="/destination">Destination </Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
        <li>
            <Link href="/contact">Contact</Link>
        </li>
        <li>
            <Link href="/login"> <button  className="button">Login</button></Link>
        </li>
    </ul>
</nav>
<br/> 
<br/>

<Card style={{width:"400px", height:"320px", float:"right", marginRight:"100px", padding:"10px"}}>      
<Box>Origin </Box>
   <Card.Header>Dhaka</Card.Header>
   <Box>Destination</Box>
   <h5>{placeName}</h5>


<Box>Date</Box>
    <div style={{display:"flex", marginInline:"30px"}}>
    
   

      
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Card.Header style={{width:"150px", height:"80px", borderRight:"solid white 5px"}}>
        <KeyboardDatePicker
          margin="normal"
          id="from"
         label="From"
    
          format="MM/dd"
          value={selectedDate1}
          onChange={handleDateChange1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        </Card.Header>

        <Card.Header style={{width:"150px", height:"80px",borderLeft:"solid white 5px"}}>

            
        <KeyboardDatePicker
          margin="normal"
          id="to"
          label="To"
          format="MM/dd"
          value={selectedDate2}
          onChange={handleDateChange2}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       </Card.Header>
     
    </MuiPickersUtilsProvider>
    
    </div>
   {bookingButton}
    
    </Card>


        </div>
    );
};


export default BookingDetail;