import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import OpenBurger from './OpenBurger/OpenBurger'
import {
  NavigationContainerDT,
  NavigationContainerM,
  NavigationButtonDT,
  MobileHamburgerIcon
} from './NavigationStyles'

const Navigation = ({ setView }) => {

  const [isOpen, setIsOpen] = useState(false)

  let openNav;
  if (isOpen === false) {
    openNav = null
  } else if (isOpen === true) {
    openNav = <OpenBurger setView={setView} setIsOpen={setIsOpen} isOpen={isOpen}/>
  }

  return (
    <div>
      <MediaQuery maxDeviceWidth={500}>
        <NavigationContainerM>
          <MobileHamburgerIcon className="fa fa-bars" onClick={() => setIsOpen(!isOpen)}/>
          {openNav}
        </NavigationContainerM>
      </MediaQuery>
      <MediaQuery minDeviceWidth={500}>
      <NavigationContainerDT>
          <NavigationButtonDT onClick={() => setView('home')} href="#">home</NavigationButtonDT>
          <NavigationButtonDT onClick={() => setView('research')} href="#">research</NavigationButtonDT>
          <NavigationButtonDT onClick={() => setView('contact')} href="#">contact</NavigationButtonDT>
        </NavigationContainerDT>
      </MediaQuery>
    </div>
  )
}

export default Navigation