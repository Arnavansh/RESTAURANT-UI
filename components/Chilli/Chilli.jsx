import React from "react";

import './Chilli.css';

import chilli from './Chilli.jpg';

const Chilli = () => {
    return (
        <>
                <p className="p1"><b>A Premium</b><br />
                   <b>And Authentic</b><br />
                    <b>Steakhouse</b></p>
                <img className="i1" src={chilli} width="300" height="250"></img>
                <button type="button" class="btn btn-outline-dark">Book a Table</button>
        </>
    )
}

export default Chilli;