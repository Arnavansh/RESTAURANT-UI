import React from "react";

import './About.css';

import about from './About.jpg';

const About = () => {
    return (
        <>
        <h1>ABOUT US</h1>
        <p className="f">Chili's Grill & Bar is an American casual dining restaurant chain.
            The company was founded by Larry Lavine in Texas in 1975 and is 
            currently owned and operated by Brinker International
        </p>

        <p className="s">Chili's first location, a converted postal station on Greenville 
            Avenue in the Vickery Meadows area of Dallas, Texas, opened in 1975. 
            The original Chili's on Greenville Avenue moved to a new building on 
            the same site in 1981 before relocating again in 2007.
        </p>

        <p className="t">Lavine's concept was to create an informal, full-service 
            dining restaurant with a menu featuring different types 
            of hamburgers offered at an affordable price. The brand 
            proved successful, and by the early 1980s, there were 
            28 Chili's locations in the region, all featuring similar 
            Southwest decor.
        </p>

        <p className="th">In 1983, Lavine sold the company to restaurant executive 
            Norman E. Brinker, formerly of the Pillsbury restaurant 
            group that owned Bennigan's.
        </p>
        <img className="abt" src={about} width="200" height="150"></img>
        <p className="i2">Chili's location in Pooler, Georgia</p>
        </>
    )
}

export default About;