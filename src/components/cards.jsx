import React, { Component } from 'react';

import Card from "./card"

const Cards = (props) => {
    return ( 
        <React.Fragment>
            <div className='cards row no-gutters bg-light justify-content-center'>
            {props.data[0].cards.map(a => 
            <Card 
            a={a}
            key={a.id}
            layout="col-md-5"/>)}
          </div>
        </React.Fragment>
     );
}
 
export default Cards;