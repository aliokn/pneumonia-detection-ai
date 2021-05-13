import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Result.css';
import img1 from './img/Result.png';

function Result() {
    const [normal, setNormal] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setNormal(data.normal)
        })
    }, [])
    const [vrs, setVrs] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setVrs(data.vrs)
        })
    }, [])
    const [bkt, setBkt] = useState(0)

    useEffect(() => {
        fetch('/Result').then(res => res.json()).then(data => {
            setBkt(data.bakteri)
        })
    }, [])

    return (
        <div>
            <img src={img1} className="res-img"/>
           <p className="text"> Normal olma olasılığınız:%{normal}</p>
           <p className="text"> Viral Pnömoni olasılığınız:%{vrs}</p>
           <p className="text"> Bakteriyal Pnömoni olasılığınız:%{bkt}</p>
        </div>
    );
}

export default Result;