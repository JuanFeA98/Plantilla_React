import React from 'react'
import { Link } from 'react-router-dom' 

import '../styles/header.css'

export default function Header() {
  return (
    <header>
        <Link to="/">
            <div className="logo"></div>
            <h1>Brand Name</h1>
        </Link>
    </header>
  )
}
