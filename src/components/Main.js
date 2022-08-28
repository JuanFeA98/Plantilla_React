import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/main.css'

export default function Main() {
  return (
    <section className='main'>
        <h2>Lorem Ipsum</h2>
        <div className="container c_1">
            <Link to='prueba' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3227/3227017.png" alt="" />
                    <h3>Primer modulo</h3>
                </div>
                <p>Categoría 1, Categoría 2</p>
            </Link>
            <Link to='/' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/6198/6198259.png" alt="" />
                    <h3>Segundo modulo</h3>
                </div>
                <p>Categoría</p>
            </Link>
            <Link to='/' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3227/3227017.png" alt="" />
                    <h3>Tercer modulo</h3>
                </div>
                <p>Categoría 1, Categoría 2</p>
            </Link>
        </div>
        <div className="container c_2">
            <Link to='/' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/6198/6198259.png" alt="" />
                    <h3>Cuarto modulo</h3>
                </div>
                <p>Categoría</p>
            </Link>
            <Link to='/' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/3227/3227017.png" alt="" />
                    <h3>Quinto modulo</h3>
                </div>
                <p>Categoría 1, Categoría 2</p>
            </Link>
            <Link to='/' className="module">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/6198/6198259.png" alt="" />
                    <h3>Sexto modulo</h3>
                </div>
                <p>Categoría 1, Categoría 2</p>
            </Link>
        </div>
    </section>
  )
}
