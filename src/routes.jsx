import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'
// import Contact from './components/Contact/Contact'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />,
            // children: [{
            //     path: "/contact",
            //     element: <Contact />
            // }
            // ]
        }
        ]
    }
])

export default routes
