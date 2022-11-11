import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from "./Home/Home"
import About from "./About/About"
import Assets from "./Assets/Assets"
import OurWork from "./OurWork/OurWork"
import Clients from "./Clients/Clients"
import Contact from "./Contact/Contact"

const Main = () => {
    return <main>
        <Routes>
            <Route element={<Home />} path={'/'} />
            <Route element={<About />} path={'/about'} />
            <Route element={<OurWork />} path={'/ourwork'} />
            <Route element={<Clients />} path={'/clients'} />
            <Route element={<Assets />} path={'/assets'} />
            <Route element={<Contact />} path={'/contact'} />
        </Routes>
    </main>
  }


export default Main

