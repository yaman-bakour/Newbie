import React, { Component } from 'react';
import data from '../data';

const Carousell = (props) => {
    // props.data.{elements}.sliderimg // props.data.{elements}.id
    return ( 
        <React.Fragment>
            <div className='carousel slide' data-ride="carousel" id='slider'>
                
                <ul className='carousel-indicators'>
                    {props.data.map(a => 
                    a.id == 0 ? <li key={a.id} data-slide-to="0"  data-target="#slider" className='active'></li> : 
                    <li key={a.id} data-slide-to={a.id} data-target="#slider"></li>)}
                </ul>

                <div className='carousel-inner'>
                    {props.data.map(a => 
                        a.id == 0 ? 
                        <div key={a.id} className='carousel-item active '>
                            <img className='w-100' src={require(`../imgs/${a.sliderimg}`)} alt="" />
                            <div className='carousel-caption d-block'></div>
                        </div> : 
                        <div key={a.id} className='carousel-item'>
                            <img className='w-100' src={require(`../imgs/${a.sliderimg}`)} alt="" />
                            <div className='carousel-caption d-block'></div>
                        </div> )}
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Carousell;
