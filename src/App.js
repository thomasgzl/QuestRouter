import React, { Component } from 'react'

import Timer from './timer.js'
import './App.css'

class App extends Component {
  render () {
      return (
        <div className='App'>
          <Timer startCount/>
        </div>
      )
  }
}

export default App