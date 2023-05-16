import React, { Component } from 'react';

const Transparent = (props) => {

    let winheight = window.innerHeight;

    return ( 
        <div className='transparent'>
            <img style={({height : "100%" , width : "100%"})} 
                src={props.img} alt="" />
        </div>
     );
}
 
export default Transparent;