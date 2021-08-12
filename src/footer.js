import render from 'dom-serializer'
import React from 'react'
import logo from './images/logo.svg'
import fb from './images/icon-facebook.svg'
import twit from './images/icon-twitter.svg'
import pin from './images/icon-pinterest.svg'
import insta from './images/icon-instagram.svg'
import './style.scss'

const FooterSection = (props)=>{
    return(
        <footer>
            <div className='logo-wrapper'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <section className='links'>
                <h4>Features</h4>
                <a>Link Shortening</a>
                <a>Branded Links</a>
                <a>Analytics</a>
            </section>
            <section className='links'>
                <h4>Resources</h4>
                <a>Blog</a>
                <a>Developers</a>
                <a>Support</a>
            </section>
            <section className='links'>
                <h4>Company</h4>
                <a>About</a>
                <a>Our Team</a>
                <a>Careers</a>
                <a>Contact</a>
            </section>
            <section className='social-media'>
                <img src={fb} alt='facebook'></img>
                <img src={twit} alt='twitter'></img>
                <img src={pin} alt='pinterest'></img>
                <img src={insta} alt='instagram'></img>
            </section>
        </footer>
    )
}

export default FooterSection