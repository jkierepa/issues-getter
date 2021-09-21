import React from 'react'

import HomeContainer from '@containers/Home/HomeContainer'

import SafeArea from '@components/SafeArea/SafeArea'

const Home = (): React.ReactElement => {
  return (
  <SafeArea>
    <HomeContainer />
  </SafeArea>)
}

export default Home
