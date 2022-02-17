import { Typography } from '@mui/material';
import React from 'react'
import './Introduction.css'

function Introduction() {
    return (
        <>
        <div id="intro" style={{padding:"10px 15px "}}>
            <h1>Introduction</h1>
            
            <p>
            The objective of the electric utility or grid operator on an hour-to-hour basis is to minimize the total generation cost of meeting electricity demand. Economic Dispatch is the procedure by which the utility selects which of its generators it will use to meet electricity demand. You can think about economic dispatch like clearing the electricity market, as follows:
                <li>The utility constructs a marginal cost (supply) curve for its entire system.</li>
                <li>Demand is often assumed to be price-inelastic (vertical demand curve).</li>
                <li>The marginal cost of generation at the market-clearing point (supply = demand) is called the "System Lambda."</li>
                <li>The generator whose output serves the marginal kWh of electricity demand is called the "marginal unit."</li>
            </p>

            </div>
        </>
    );
}

export default Introduction;