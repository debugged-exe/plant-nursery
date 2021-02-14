import React from "react";
import 'tachyons';
import './contact.css'
function Contact() {
    return (
        <div>
        <div className='margin'></div>
        <section className='parallax'>
            <div className='parallax-inner flex flex-column justify-center items-center'>
                <h1>Contact Us</h1>
                <div className='mv2'>
                    <p>Name</p>
                    <input className='bg-none br2' placeholder='Enter Name'/>
                </div >
                <div className='mv2'>
                    <p>Email</p>
                    <input className='bg-none br2' placeholder='Enter Email'/>
                </div>
                <div className='mv2'>
                    <p>Message</p>
                    <textarea className='bg-none br2 pr4' placeholder='Enter Email'/>
                </div>
                <a class="mt4 br2 grow f4 link ph3 pv2 mb2 dib white bg-dark-green" href="#0">Send Query</a>
            </div>
        </section>
        <div className='margin'></div>
    </div>
    );
}

export default Contact;
