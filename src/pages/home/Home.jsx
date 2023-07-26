import React from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/featured'
import List from '../../components/list/List'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      {/* <List /> */}
      {/* <List /> */}
    </div>
  )
}

export default Home
