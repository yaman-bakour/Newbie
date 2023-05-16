import React, { Component } from 'react';
import { FaCode , FaBold , FaCss3} from "react-icons/fa"

const Build = (props) => {
    return ( 
        <React.Fragment>
            <div className='row no-gutters justify-content-center p-4 text-dark bg-light'>
                    <h2 className='col-7 build text-center p-4'>Build with ease</h2>
                    <p className='col-7 p-4'>get all the tools you need get all the tools you need
                    get all the tools you need
                    get all the tools you need
                    get all the tools you need
                    </p>
            </div>
            <div className='row no-gutters text-dark text-center bg-light'>
                <div className='col-md-4 p-3'>
                    <FaCode color="red" size="5em"/>
                    <h2>HTML5</h2>
                    <p>this is paragraph</p>
                </div>
                <div className='col-md-4 p-3'>
                    <FaBold color="purple" size="5em"/>
                    <h2>BOOTSTRAP</h2>
                    <p>this is paragraph</p>
                </div>
                <div className='col-md-4 p-3'>
                    <FaCss3 color="#005affe0" size="5em"/>
                    <h2>CSS3</h2>
                    <p>this is paragraph</p>
                </div>
            </div>
            <div className='row no-gutters p-3 text-dark bg-light'>
                <div className='col-md 6'>
                    <h1 className='build pb-4'>If you build it...</h1>
                    <p>we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    </p>
                    <p>we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    </p>
                    <p>we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    we can help you build everything you want by providing all the things you need
                    </p>
                    <a href='' className='btn btn-outline-secondary'>Learn More</a>
                </div>
                <div className='col-md-6 p-3 build-it'>
                    <img className='w-100 build-it-img' src={props.img} alt="" />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Build;