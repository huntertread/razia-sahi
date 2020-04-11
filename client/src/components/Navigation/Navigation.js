import React from 'react'
import MediaQuery from 'react-responsive'
import {
  NavigationContainerDT,
  NavigationContainerM,
  NavigationButtonDT,
  NavigationButtonM
} from './NavigationStyles'

const Navigation = () => {
  return (
    <div>
      <MediaQuery maxDeviceWidth={500}>
        <NavigationContainerM>
          <NavigationButtonM href="#">home</NavigationButtonM>
          <NavigationButtonM href="#">work</NavigationButtonM>
          <NavigationButtonM href="#">contact</NavigationButtonM>
        </NavigationContainerM>
      </MediaQuery>
      <MediaQuery minDeviceWidth={500}>
      <NavigationContainerDT>
          <NavigationButtonDT href="#">home</NavigationButtonDT>
          <NavigationButtonDT href="#">work</NavigationButtonDT>
          <NavigationButtonDT href="#">contact</NavigationButtonDT>
        </NavigationContainerDT>
      </MediaQuery>
    </div>
  )
}

export default Navigation