import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

import Login from './Components/Header/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BookingDetail from './Components/Header/Home/BookingDetail';
import SignIn from './Components/Header/Login/SignIn';
import HotelDetail from './Components/Booking/HotelDetail';






export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>

    <Router>
    
    <Switch>
      <Route path="/home">
      <Header></Header>
      </Route>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/signIn">
        <SignIn></SignIn>
      </Route>
      <Route path="/hotelDetail">
        <HotelDetail></HotelDetail>
      </Route>
      <Route path="/bookingDetail">
        <BookingDetail></BookingDetail>
      </Route>
      <PrivateRoute path="/booking">
      <Booking>
      </Booking>
      </PrivateRoute>
      <Route exact path="/">
        <Header></Header>
      </Route>
      <Route>

      </Route>
    </Switch>
   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
