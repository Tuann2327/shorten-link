import {useState} from 'react'
import './style.scss'

const ListCard = (props)=>{
    
    const [copiedNum,SetCopiedNum] = useState('-1')

    const check = (num)=>{
        if(num == copiedNum) return true
        return false
    }

    const clickCopy = (e)=>{
        navigator.clipboard.writeText(props.list[e.target.id].shortlink)
        SetCopiedNum(e.target.id)
    }

    const isValid = (valid,index)=>{
        if(valid) return
        return(
            <button disabled={check(index)} id={index} onClick={clickCopy}>
                {!check(index)?'Copy':'Copied!'}
            </button>
        )
    }

    const ListLinks = props.list.map((link,index)=>{
        return(
            <div className='link-card' key={index}>
                <a className='full-link'>
                    {link.fulllink}
                </a>
                <div className='shorten'>
                    <a className={link.err?'link-err':'short-link'}>
                        {link.shortlink}
                    </a>
                    {isValid(link.err,index)}
                </div>
            </div>
        )
    })

    return(
        <div className='link-card-holder'>
            {ListLinks}
        </div>
    )
}

export default ListCard