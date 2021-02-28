import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import config from './firebase.config';
import {UserContext} from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import google from '../../../Icon/google.png';
import { Card, ThemeProvider } from 'react-bootstrap';
import { createMuiTheme, TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const Login = () => {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error:''
})

 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: "/"} };




    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
    const handleGoogleSignIn =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();



        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   const {displayName, email} = result.user;
   const signInUser = {name: displayName, email} 
   setLoggedInUser(signInUser);
   history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
  
    var errorMessage = error.message;
    console.log(errorMessage);
    var email = error.email;
    console.log(email);
   
    // ...
  });
    }


    const handleSignOut = () => {
      firebase.auth().signOut()
          .then(res => {
              const signedOutUser = {
                  isSignedIn: false,
                  name: '',
                  email: '',
                  error: '',
                  success: ''

              }
              setUser(signedOutUser);
          })
          .catch(error => {


          })

  }
const handleSubmit =(e) =>{
  if (newUser && user.email && user.password) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = { ...user };
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
        })

        .catch(error => {
            //handle errors here.
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            // ..
        });

}
if (!newUser && user.email && user.password) {
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log('sign in user info', res.user);


      })
      .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
      });

}
e.preventDefault();
}

   const handleBlur=(e)=>{
    
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
      <Card className="create-id">
           
           <h2>Create An Account</h2>
       <form onSubmit={handleSubmit}>
              
       <ThemeProvider theme={theme}>
        <TextField
            label="Name" name="name" onBlur={handleBlur} required
        />
         <TextField
            label="Username or E-mail" name="email" onBlur={handleBlur} required
        />
         <TextField
            label="Password" type="password" name="password" onBlur={handleBlur} required
        />
         <TextField
            label="Confirm Password" type="password" name="confirmPassword" onBlur={handleBlur} required
        />
        
         </ThemeProvider>
         <br/>

         <input style={{backgroundColor:"orange", marginTop:"15px", border:"5px", width:"300px"}} type="submit" value="Create an Account"/>
             
       </form>
              <br/>

                  <p>Already have an account? <Link to="/signIn">Log In</Link></p>

      
                      </Card>

                      <p style={{color:"red"}}>{user.error}</p>
                      { user.success && <p style={{ color: 'green' }}>Account {newUser ? 'created' : 'Logged In'} Successfully</p>}

                       <h4> Or </h4>
                       <button style={{width:"350px", borderRadius:"30px"}}onClick={handleGoogleSignIn}>
                         
                         <img className="google-logo" src={google} alt=""/> Continue with Google</button>
</div>   
    );
};

export default Login;