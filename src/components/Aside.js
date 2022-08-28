import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai";

import '../styles/aside.css'

export default function Aside() {
    const [sidebar, setSidebar] = React.useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
    <div className='Aside'>
        <Link to='/'>
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
        <div className={sidebar?'nav-menu':'nav-menu-active'}>
            <ul className={sidebar?'nav-elements':'nav-menu-elements-active'}>
                <li>
                    <Link to='#'>
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
