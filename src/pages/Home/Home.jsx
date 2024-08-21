import React from 'react'
import About from "../../components/About/About"
import Contact from '../../components/Contact/Contact'
import Intro from '../../components/Intro/Intro'
import Projects from '../../components/Projects/Projects'

const Home = () => {
    return (
        <>
            <Intro />
            <div className='container'>
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Home
