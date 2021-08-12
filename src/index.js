
import reactDom from 'react-dom'
import FooterSection from './footer'
import HeaderSection from './header'
import MainSection from './main'
import './style.scss'
const MainApp = (props)=>{
    return(
        <div className='container'>
            <HeaderSection/>
            <MainSection/>
            <FooterSection/>
        </div>
        
    )
}

reactDom.render(<MainApp/>,document.querySelector('#root'))