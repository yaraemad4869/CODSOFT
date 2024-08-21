import React from 'react'
import MyPhoto from "../../assets/Yara.png"
import { Link, useNavigate } from 'react-router-dom'
const Intro = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="flex-row-sm">
                <div className="container col-12 col-sm-7">
                    <div className="profile-text">
                        <h1 className='uppercase'>yara emad eldien</h1>
                        <h2 className="capitalize">reactJS frontend developer</h2>
                    </div>
                </div>
                <div className='col-12 col-sm-5'>
                    <img className="profile-img" src={MyPhoto} alt="My Photo" />
                </div>
            </div>
            <nav className='flex-row-md text-center'>
                <h2 className='capitalize col-12 col-md-3' ><a href="/">my portfolio</a></h2>
                <ul className='flex-row col-12 col-md-9 justify-around flex-end-md'>
                    <li className='col-2'><a href="/">home</a></li>
                    <li className='col-2'><a href="#about">about</a></li>
                    <li className='col-2'><a href="/#projects">projects</a></li>
                    <li className='col-2'><a href="/#contact">contact</a></li>
                    {/* <li className='col-2' onClick={() => {
                        navigate("./#contact")
                    }}>contact</li>
                    <li className='col-2'><Link to="/#contact">contact</Link></li> */}
                </ul>
            </nav>
        </section>

    )
}

export default Intro
