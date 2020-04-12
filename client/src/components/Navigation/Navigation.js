import React from 'react'
import MediaQuery from 'react-responsive'
import {
  NavigationContainerDT,
  NavigationContainerM,
  NavigationButtonDT,
  NavigationButtonM
} from './NavigationStyles'

const Navigation = ({ view, setView }) => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={500}>
        <NavigationContainerM>
          <NavigationButtonM onClick={() => setView('home')} href="#">home</NavigationButtonM>
          <NavigationButtonM onClick={() => setView('research')} href="#">research</NavigationButtonM>
          <NavigationButtonM onClick={() => setView('contact')} href="#">contact</NavigationButtonM>
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