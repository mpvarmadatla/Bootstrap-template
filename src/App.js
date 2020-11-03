import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import NavBar from './Navbar'
import Bootstrap from './Bootstrap'
import Protfolio from './Portfolio'
const App = () =>(
    <div>
        <Header />
        <NavBar />
        <Protfolio />
        <About />
        <Contact />
        <Footer />
        <Bootstrap />
    </div>
)

export default App;