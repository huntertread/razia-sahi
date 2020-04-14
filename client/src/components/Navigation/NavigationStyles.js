import styled from 'styled-components'

export const NavigationContainerDT = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const NavigationContainerM = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const NavigationButtonDT = styled.a`
  font-size: 15px;
  text-decoration: none;
  margin: 0px 15px;
  &:hover {
    color: white;
  }
`