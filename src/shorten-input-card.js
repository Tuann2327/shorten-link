
import React from 'react'
import './style.scss'
import loading from './images/loading.svg'

const ShortenInputCard = (props)=>{

    const checkloading = ()=>{
        if(props.isloading) return <img src={loading}/>
        return 'Shorten It?'
    }

    return(
        <div className='shorten-input-card'>
            <section className='input-wrapper'>
                <input 
                disabled={props.isloading}
                type='text' 
                value={props.inputValue} 
                onChange={props.inputHandle}
                placeholder='Shorten a link here...'
                />
                <button disabled={props.isloading} onClick={props.linkHandle}> {checkloading()} </button>
            </section>
        </div>
    )
}

export default ShortenInputCard