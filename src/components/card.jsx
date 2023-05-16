import React, { Component } from 'react';

const Cards = (props) => {
    // props.data[0].cards.{elements}.img // props.data[0].cards.{elements}.title 
    // props.data[0].cards.{elements}.subtitle // props.data[0].cards.{elements}.text 
    // props.data[0].cards.{elements}.link // props.data[0].cards.{elements}.linktext

    // this component must be in a map() function with a as a prop
    return ( 
        <React.Fragment>
            <div className={`card ${props.layout} p-2 m-3 text-dark`}>
                <img className='card-img-top' src={require(`../imgs/${props.a.img}`)} alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{props.a.title}</h5>
                    <h6 className='card-subtitle text-muted mb-2'>{props.a.subtitle}</h6>
                    <p>{props.a.text}</p>
                    <a href={props.a.link}>{props.a.linktext}</a>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Cards;
