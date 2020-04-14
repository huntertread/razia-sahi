import styled from 'styled-components'

export const OpenBurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  // justify-content: space-between;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  position: fixed;
`
export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
export const HamburgerClose = styled.i`
  font-size: 60px;
  margin: 15px;
  color: white;
`
export const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // margin-bottom: 30px;
  height: 80vh;
`
export const NavigationButtonM = styled.a`
  font-size: 80px;
  text-decoration: none;
  margin: 15px auto;
  color: white;
`