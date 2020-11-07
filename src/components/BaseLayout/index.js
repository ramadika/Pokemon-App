// Dependencies
import React from 'react'
// Internals
import NavBar from 'components/BaseLayout/NavBar'
import Footer from 'components/BaseLayout/Footer'

export default function index() {
    return (
        <div>
            <NavBar />
            {this.props.children} 
            <Footer />
        </div>
    )
}

