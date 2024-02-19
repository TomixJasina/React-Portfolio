import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.css';
import avatar from '../assets/images/avatar.png'


const Home = () => {
        return (
            <div className='row'>
                <div className='row col-5'>
                <h1 className='text'>Welcome to my Portfolio</h1>
                <p className='text'>Learn more about us.</p>
                </div>
                <div className='col-5'>
                    <img src={avatar} alt='My photo' width={500} height={500}></img>
                </div>
            </div>
        );
}

export default Home;