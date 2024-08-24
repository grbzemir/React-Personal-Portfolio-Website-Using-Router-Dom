import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState, useEffect } from 'react'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)

    const location = useLocation()

    //Eğer benim location'ım değişirse benim navbar'ımı kapat false yap
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}><ReorderIcon /></button>
            </div>s
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar
