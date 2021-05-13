import React, { Component} from 'react';
import { Link,withRouter,Route, Switch, NavLink } from 'react-router-dom';
import {MenuItems} from './MenuItems'
import './Navbar.css'
import Home from './Home';
import Result from '../../Result';
import Upload from '../../Upload';
import How from '../../How';

class Navbar extends Component{
    
    
    
    
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Pnömoni Teşhisi</h1>
                <div className="menu-icon">

                </div>
                <ul className="nav-menu">
                
                        
                            <li>
                               <Link to="/Home" className="nav-links">Home</Link>
                               <Link to="/How" className="nav-links">Nasıl Çalışır</Link>
                               <Link to="/Upload" className="nav-links">Upload</Link>
                               
                            </li>
                        
                    

                </ul>
               
                                

            </nav>
      


        ) }
    
}

export default Navbar