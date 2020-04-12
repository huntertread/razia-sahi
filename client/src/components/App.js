import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import Homepage from './Homepage/Homepage'
import Research from './Research/Research'
import Contact from './Contact/Contact'
import { Background } from './AppStyles.js'

const App = () => {

  const [view, setView] = useState('home')

  let page;
  if (view === 'home') {
    page = <Homepage />
  } else if (view === 'research') {
    page = <Research />
  } else if (view === 'contact') {
    page = <Contact />
  }

  return (
    <Background>
      <Navigation view={view} setView={setView}/>
      {page}
    </Background>
  )
}

export default App