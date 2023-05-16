import React, { Component } from 'react';
 const Footer = (props) => {
     return ( 
         <div className='footer bg-dark p-3'>
             <div className='row no-gutters text-center'>
                <div className='col-sm'>
                    <img className='w-100' src={props.img} alt="" />
                    <p>555-555-5555</p>
                    <p>email@myemail.com</p>
                    <p>100 street name</p>
                    <p>city, state, 00000</p>
                </div>
                <div className='col-sm'>
                    <h3 className='p-3'>Service Hours</h3>
                    <p>monday 9am - 5pm</p>
                    <p>saturday 10am - 4px</p>
                    <p>sunday: closed</p>
                </div>
                <div className='col-sm'>
                    <h3 className='p-3'>Our Hours</h3>
                    <p>city, state, 00000</p>
                    <p>city, state, 00000</p>
                    <p>city, state, 00000</p>
                    <p>city, state, 00000</p>
                </div>
             </div>
             <h2 className='end text-center p-3'>To a better future and beyond</h2>
         </div>
      );
 }
  
 export default Footer;