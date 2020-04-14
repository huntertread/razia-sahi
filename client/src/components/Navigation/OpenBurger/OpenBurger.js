import React from 'react'
import {
  OpenBurgerContainer,
  NavigationButtonM,
  HamburgerClose,
  CloseButtonContainer,
  NavButtonContainer
} from './OpenBurgerStyles'

const OpenBurger = ({ setView, isOpen, setIsOpen }) => {

  const buttonClick = (page) => {
    setView(page)
    setIsOpen(!isOpen)
  }

  return (
    <OpenBurgerContainer>
      <CloseButtonContainer>
        <HamburgerClose className="fa fa-close" onClick={() => setIsOpen(!isOpen)} />
      </CloseButtonContainer>
      <NavButtonContainer>
        <NavigationButtonM onClick={() => buttonClick('home')} href="#">home</NavigationButtonM>
        <NavigationButtonM onClick={() => buttonClick('research')} href="#">research</NavigationButtonM>
        <NavigationButtonM onClick={() => buttonClick('contact')} href="#">contact</NavigationButtonM>
      </NavButtonContainer>
    </OpenBurgerContainer>
  )
}

export default OpenBurger