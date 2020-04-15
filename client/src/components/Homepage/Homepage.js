import React from 'react'
import MediaQuery from 'react-responsive'
import {
  HomepageContainerDT,
  HomepageContainerM,
  HomepageH1,
  HomepageH2,
  HomepageP,
} from './HomepageStyles.js'

const Homepage = () => {
  return (
    <div>
    <MediaQuery minDeviceWidth={500}>
       <HomepageContainerDT>
        <HomepageH1>RAZIA SAHI</HomepageH1>
        <HomepageH2>PHD UCLA Cognitive Neuroscience</HomepageH2>
        <HomepageP>A big paragraph about what Razia does and why she likes to do it. What are her methods etc. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</HomepageP>
      </HomepageContainerDT>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={500}>
      <HomepageContainerM>
        <HomepageH1>RAZIA SAHI</HomepageH1>
        <HomepageH2>PHD UCLA Cognitive Neuroscience</HomepageH2>
        <HomepageP>A big paragraph about what Razia does and why she likes to do it. What are her methods etc. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</HomepageP>
      </HomepageContainerM>
    </MediaQuery>
    </div>
  )
}

export default Homepage