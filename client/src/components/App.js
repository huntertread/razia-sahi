import React from 'react'
import Navigation from './Navigation/Navigation'
import Homepage from './Homepage/Homepage'
import { Background } from './AppStyles.js'

const App = () => {
  return (
    <Background>
      <Navigation />
      <Homepage />
    </Background>
  )
}

export default App