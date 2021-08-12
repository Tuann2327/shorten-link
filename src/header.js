import render from 'dom-serializer'
import React from 'react'
import logo from './images/logo.svg'
import introimg from './images/illustration-working.svg'
import './style.scss'

const HeaderSection = (props)=>{
    return(
        <header>
            <nav>
                <div className='left-bar'>
                    <img className='logo' src={logo} alt='logo'/>
                    <a href='#'>Features</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Resources</a>
                </div>
                <div className='right-bar'>
                    <a href="#">Login</a>
                    <button>Sign Up</button>
                </div>
            </nav>
            <section>
                <div className='intro'>
                    <h1 className='tittle'>
                        More than just shorter links
                    </h1>
                    <p className='des'>
                        Build your brand’s recognition and get detailed insights on how your links are performing. 
                    </p>
                    <button className='get-started'>
                        Get Started
                    </button>
                </div>
            </section>
        </header>
    )
}

export default HeaderSection