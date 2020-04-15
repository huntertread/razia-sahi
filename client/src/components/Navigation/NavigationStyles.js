import styled from 'styled-components'

export const NavigationContainerDT = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
`
export const NavigationContainerM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const MobileHamburgerIcon = styled.i`
  font-size: 60px;
  margin: 15px;
`

export const NavigationButtonDT = styled.a`
  font-size: 25px;
  text-decoration: none;
  margin: 10px 30px;
  color: white;
  transition: color .2s;
  &:hover {
    color: blue;
  }
`