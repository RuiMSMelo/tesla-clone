import React from 'react'
import Navbar from '../Components/Navbar'
import Firstpage from '../Components/Firstpage'
import Secondpage from '../Components/Secondpage'
import Thirdpage from '../Components/Thirdpage'
import Fourthpage from '../Components/Fourthpage'

export default function Home() {
  return (
    <div id='homepage'>
        <Navbar />
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
    </div>
  )
}

