import React from 'react';
import './navbar.css';

function navbar() {
    return (<nav className="db dt-l w-100 border-box pa3 ph5-l" data-aos={"fade-down"}>
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
            <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
            <div className={'dropdown'}>
                <a href="javascript:void(0)" className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Seeds</a>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className={'dropdown'}>
                <a href="javascript:void(0)" className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Plants</a>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className={'dropdown'}>
                <a href="javascript:void(0)" className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Pots</a>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className={'dropdown'}>
                <a href="javascript:void(0)" className="dropbtn link dim dark-gray f6 f5-l dib mr3 mr4-l">Tools</a>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Contact">Contact</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#about" title="About">About us</a>
        </div>
    </nav>);
}

export default navbar;