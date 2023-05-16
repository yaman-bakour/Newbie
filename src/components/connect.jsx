import React, { Component } from 'react';
import { FaFacebook , FaGooglePlusG , FaTwitter , FaInstagram , FaYoutube} 
from 'react-icons/fa';

const Connect = () => {
    return ( 
        <div className='bg-light'>
            <h1 className='text-center text-dark p-3'>Connect</h1>
            <div className='row no-gutters p-3 text-center'>
                <a className='col iconblue' href=""><FaFacebook size="3em"/></a>
                <a className='col iconblue' href=""><FaTwitter size="3em"/></a>
                <a className='col iconred' href=""><FaGooglePlusG size="3em"/></a>
                <a className='col iconblue' href=""><FaInstagram size="3em"/></a>
                <a className='col iconred' href=""><FaYoutube  size="3em"/></a>
            </div>
        </div>
     );
}
 
export default Connect;