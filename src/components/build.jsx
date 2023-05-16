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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                    <a href='' className='btn btn-outline-secondary'>Learn More</a>
                </div>
                <div className='col-md-6 p-3 build-it'>
                    <img className='w-100 build-it-img' src={require(`../imgs/${props.img}`)} alt="" />
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Build;
