import React from 'react'

function NValue(props) {
    
    return (
        <>
        <div>
            <label>Enter the number of power generating stations : </label>
            <input type="int" onChange={props.handleChangeN} value={props.n_value} className='mx-2 inp' />
        </div>
        <div>
            <label>Total Power Demand (in MW) : </label>
            <input type="int" onChange={props.handleChangePd} value={props.pd_value} className='mx-2 inp' />
        </div>
        </>
    );
}

export default NValue;