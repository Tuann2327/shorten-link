import {useState} from 'react'
import React from 'react'
import axios from 'axios'
import bricon from './images/icon-brand-recognition.svg'
import ShortenInputCard from './shorten-input-card'
import './style.scss'
import ListCard from './LinksListCard'

const MainSection = (props)=>{
    const [links,SetLinks] = useState([])
    const [input,setInput] = useState('')
    const [loading,setLoading] = useState(false)

    const InputUpdate = (e)=>{
        setInput(e.target.value)
    }
    const AddNewLink = async (e)=>{
        if(input==='') return
        setLoading(true)
        try{
            const data = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
            const newLinksList = [...links]
            newLinksList.push({
                err:false,
                fulllink: input,
                shortlink: data.data.result.full_short_link
            })
            SetLinks(newLinksList)
        }catch(e){
            console.log('err')
            const newLinksList = [...links]
            newLinksList.push({
                err:true,
                fulllink: input,
                shortlink: 'This is not an valid link!!!'
            })
            SetLinks(newLinksList)
        }
        setInput('')
        setLoading(false)
    }

    return(
        <>
        <main>
            <ShortenInputCard 
                isloading = {loading}
                inputValue = {input}
                linkHandle={(e)=>{AddNewLink(e)}} 
                inputHandle={(e)=>{InputUpdate(e)}}
            >
            </ShortenInputCard>
            <ListCard
                list={links}
            />
            <section className='main-info'>
                <h2 className='tittle'>
                    Advanced Statistics
                </h2>
                <p className='des'>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </section>
            <section className='main-cards'>
                <div className='line'></div>
                <div className='card'>
                    <div className='icon'>
                        <img src={bricon} alt='Brand Recognition Icon'/>
                    </div>
                    <h3 className='card-tittle'>
                        Brand Recognition 
                    </h3>
                    <p className='card-des'>
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. 
                    </p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={bricon} alt='Brand Recognition Icon'/>
                    </div>
                    <h3 className='card-tittle'>
                        Brand Recognition 
                    </h3>
                    <p className='card-des'>
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. 
                    </p>
                </div>
                <div className='card'>
                    <div className='icon'>
                        <img src={bricon} alt='Brand Recognition Icon'/>
                    </div>
                    <h3 className='card-tittle'>
                        Brand Recognition 
                    </h3>
                    <p className='card-des'>
                        Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. 
                    </p>
                </div>
            </section>
        </main>
        <div className='boots'>
            <h2 className='tittle'>
                Boost your links today
            </h2>
            <button>
                Get Started
            </button>
        </div>
        </>
    )
}

export default MainSection