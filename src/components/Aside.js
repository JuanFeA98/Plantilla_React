import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";

import '../styles/aside.css'

export default function Aside() {
    const [sidebar, setSidebar] = React.useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
    <div className={sidebar?'Aside Aside-hide':'Aside Aside-show'}>
        <Link to='#' className='aside-button'>
            {sidebar 
                ? 
                    <AiIcons.AiOutlineDoubleRight 
                        className='icon' 
                        onClick={showSideBar}
                    /> 
                :  
                    <AiIcons.AiOutlineDoubleLeft 
                        className='icon' 
                        onClick={showSideBar}
                    />
            }
        </Link>
        <div className='nav-menu'>
            <ul className='nav-menu-elements'>
                <li>
                    <Link to='#' className='nav-element'>
                        Opción 1
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        Opción 2
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
