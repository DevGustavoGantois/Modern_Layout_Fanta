import React from 'react'
import { Hero } from './components/Hero'
import { UpdateFollower } from 'react-mouse-follower'

const App = () => {
  return (
    <main>
      <UpdateFollower mouseOptions={{backgroundColor: "white", zIndex: 10, followSpeed: 1.5, scale: 1.5}}>
      <Hero/>
      </UpdateFollower>
    </main>
  )
}

export default App
