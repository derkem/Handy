import React from 'react'
import Body from './Body'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'
import Parallax from './Parallax'
import Invoice from './Invoice'

function Index() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Body/>
            <Parallax/>
            <Footer/>
            <Invoice />
            
        </div>
    )
}

export default Index;
