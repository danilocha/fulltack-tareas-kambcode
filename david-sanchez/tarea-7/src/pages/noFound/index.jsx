import React from "react";
import { Link } from "react-router-dom";


function NoFound(){
    return (
        <div className="boxDescription">
            <h1>Ups your page no Found see you later!!</h1>
            <Link className='readme' to="/">Go to home</Link>
        </div>
    );
}
export default NoFound;