import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import CompanyLogo from './Navleaf.jpg';
function navbar({setProduct}) {
    return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l" data-aos={"fade-down"}>
        
        <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home" to='/'>
            <img src={CompanyLogo} className="dib w2 h2 br-100" alt="Site Name"/>
            <span style={{fontSize: "2rem"}}>Rohit Nursery</span>
        </Link>
        
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            
            <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Home" to='/' >Home</Link>
            <div className={'dropdown'}>
                <Link className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l" to='/product' onClick={()=>setProduct('seeds')} >Seeds</Link>
                <div className="dropdown-content">
                    <Link to=''>Link 1</Link>
                    <Link to=''>Link 2</Link>
                    <Link to=''>Link 3</Link>
                </div>
            </div>
            <div className={'dropdown'}>
                <Link className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l" to='/product' onClick={()=>setProduct('flowers')}>Plants</Link>
                <div className="dropdown-content">
                    <Link to=''>Link 1</Link>
                    <Link to=''>Link 2</Link>
                    <Link to=''>Link 3</Link>
                </div>
            </div>
            <div className={'dropdown'}>
                <Link className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Pots</Link>
                <div className="dropdown-content">
                    <Link to=''>Link 1</Link>
                    <Link to=''>Link 2</Link>
                    <Link to=''>Link 3</Link>
                </div>
            </div>
            <div className={'dropdown'}>
                <Link className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Tools</Link>
                <div className="dropdown-content">
                    <Link to=''>Link 1</Link>
                    <Link to=''>Link 2</Link>
                    <Link to=''>Link 3</Link>
                </div>
            </div>
            <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="#contact" >Contact</Link>
            <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="#about">About us</Link>
        </div>
    </nav>);
}

export default navbar;