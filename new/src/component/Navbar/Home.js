import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar'
import './Home.css'
import doc from '../../img/doc.jpg';
import Button from '@material-ui/core/Button';
import { Route, Switch,Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';



class Home extends Component{

render(){

    return(
        <div className="Home">
            <div><img className="home-img" src={doc}/></div>
            <div><h1 className="content-h">Pnömoni teşhis yapay zekasına hoşgeldiniz! </h1>
            <p>Bu yaptığımız projede sizin yolladığınız x ray görüntüsünü yapay zekamız yorumlayıp size ait bir pnömoni teşhisi koyuyor.</p>
            
    </div>
            <div><Button color="primary"  href="/How">Zekamız nasıl çalışır?</Button><Box mt={20} ml={5} mr={5} display="inline">
                <Button variant="contained" color="primary" className="buttonc" href="/Pnomani">Pnömoni Nedir</Button></Box>
            <Box mt={20} display="inline"> <Button variant="contained" color="secondary" href="/Upload" className="buttonc">Beni de teşhis edin</Button></Box></div>
        </div>
        
    )
}

}
export default Home;