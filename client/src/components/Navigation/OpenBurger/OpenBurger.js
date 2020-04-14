import React from 'react'
import { OpenBurgerContainer, NavigationButtonM } from './OpenBurgerStyles'

const OpenBurger = ({ setView, isOpen, setIsOpen }) => {

  const buttonClick = (page) => {
    setView(page)
    setIsOpen(!isOpen)
  }

  return (
    <OpenBurgerContainer>
      <NavigationButtonM onClick={() => buttonClick('home')} href="#">home</NavigationButtonM>
      <NavigationButtonM onClick={() => buttonClick('research')} href="#">research</NavigationButtonM>
      <NavigationButtonM onClick={() => buttonClick('contact')} href="#">contact</NavigationButtonM>
    </OpenBurgerContainer>
  )
}

export default OpenBurger