import React from 'react';
import header from '../../Image/Coxs.png';
import './Header.css';
import logo from '../../Icon/Logo.png';
import { Link } from '@material-ui/core';

import { FormControl, InputGroup } from 'react-bootstrap';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import Home from './Home/Home';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const history = useHistory();

    const handleLogin = () =>{
       history.push('/login');
    
    }

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
                        <button onClick={handleLogin} className="button">Login</button>
                    </li>
                </ul>
            </nav>
            <br/>
            <br/> 
           
            <Home></Home>
        </div>
    );
};

export default Header;