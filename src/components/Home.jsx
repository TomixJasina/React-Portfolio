import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.css';
import avatar from '../assets/images/avatar.png'
import Image from 'react-bootstrap/Image';


const Home = () => {
        return (
            <div className='container-fluid'>
            <div className='row m-5'>
                <div className='col-xl-6 col-md-6 col-sm-12 mt-5'>
                <h1 className='text-white mt-5'>Welcome to my Portfolio</h1>
                <h4 className='text-white mt-5'>Beyond the screen, I'm driven by a relentless pursuit of innovation, constantly embracing new frameworks and methodologies to craft digital experiences that transcend expectations. Thank you for exploring my portfolio. May it illuminate the possibilities and ignite a shared passion for crafting impactful digital landscapes.</h4>
                </div>
                <div className='col-xl-6 col-md-6 col-sm-12'>
                <div>
                    <Image className='my-5' src={avatar} roundedCircle fluid ></Image>
                </div>
                </div>
            </div>
            </div>
        );
}

export default Home;