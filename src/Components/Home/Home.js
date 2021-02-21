import React from 'react';
import './Home.css';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <div className='home-background white flex justify-center items-center flex-column ph2 pt4 pv6' data-aos={'fade-up'}>
            <h1 className='w-50-m text tc mt2' data-aos={"fade-up"} data-aos-duration={'2000'} style={{fontSize: "3rem"}}>Rohit Nursery</h1>
            <p className='w-50-m text tc ph3' data-aos={"fade-up"} data-aos-duration={'1000'}>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).</p>

            <Counter/>
        </div>
    );
}

export default Home;