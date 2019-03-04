import React, { Component } from 'react'
import Contact from './components/Contact'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <Contact />
                </div>
            </div>
        )
    }
}

export default App
