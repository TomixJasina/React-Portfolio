import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.css';
import avatar from '../assets/images/avatar.png'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const Home = () => {
        return (
            <Container>
            <div className='row mt-5'>
                <div className='col-6'>
                <h1 className='text-white'>Welcome to my Portfolio</h1>
                <p className='text-white'>Learn more about us.</p>
                </div>
                <div className='col-2'>
                <div>
                    <Image src={avatar} roundedCircle ></Image>
                </div>
                </div>
            </div>
            </Container>
        );
}

export default Home;