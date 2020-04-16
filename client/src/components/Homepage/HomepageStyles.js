import styled from 'styled-components'

export const HomepageContainerDT = styled.div`
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 900px;
  margin: 80px auto;
  min-height: 80vh;
`
export const HomepageContainerM = styled.div`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  // margin: auto;
`
export const HomepageH1 = styled.h1`
  font-size: 90px;
  margin: 0px 0px 50px 0px;
`
export const HomepageH2 = styled.h2`
  margin-top: 0px;
  font-size: 50px;
`
export const HomepageP = styled.p`
  margin: 10px 80px;
  @media (max-device-width: 500px) {
    font-size: 40px;
  }
`