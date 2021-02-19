import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Logo from './Logo.png';

function navbar({setProduct}) {
    return (
        <nav className="db dt-l w-100 border-box pa3 ph5-l" data-aos={"fade-down"}>
            <Link className="db dtc-l v-mid mid-gray link1 dim w-100 w-25-l tl-l mb2 mb0-l" title="Home" to='/'>
                <img src={Logo} className="dib w2 h2 br-100" alt="Site Name"/>
                <span style={{fontSize: "2rem"}}>Rohit Nursery</span>
            </Link>
            <div className="db dtc-l v-mid w-100 w-75-l tr-l">
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/product'
                      onClick={() => setProduct('seeds')}>Seeds</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to='/product'
                      onClick={() => setProduct('flowers')}>Plants</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l">Pots</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l">Tools</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="#contact">Contact</Link>
                <Link className="link1 dim dark-gray f6 f5-l dib mr3 mr4-l" to="#about">About us</Link>
            </div>
        </nav>);
}

export default navbar;