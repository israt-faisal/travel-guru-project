import { Card, createMuiTheme, TextField, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const SignIn = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit =() =>{
  
    }
    const handleBlur =(e)=>{
let isFieldValid = true;
if(e.target.name === 'email'){
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

    
}
if (e.target.name === 'password') {
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber = /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;

}
if (isFieldValid) {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);

}
    }

    

    const theme = createMuiTheme({
        palette: {
          primary: orange,
        },
      });
    return (
        <div className="login">
            <Card className="signin">
                <h3>Login</h3>

           <form onSubmit={handleSubmit}>
           <ThemeProvider theme={theme}>
        <TextField
            label="UserName or Email" name="email" onBlur={handleBlur} required
        />
        </ThemeProvider>

        <ThemeProvider theme={theme}>
        <TextField
            type="password" label="Password" name="password" onBlur={handleBlur} required
        />
        </ThemeProvider>
           
<br/>
<br/>
       
        <Link to="/hotelDetail"><input style={{backgroundColor:"orange",marginTop:"10px", border:"5px", width:"250px"}} type="submit" value="Login"
        /></Link>

        </form>
        <br/>
        <p>Don't have an Account? <Link to="/login">Create an Account</Link> </p>
        
            </Card>

          
        </div>
    );
};

export default SignIn;