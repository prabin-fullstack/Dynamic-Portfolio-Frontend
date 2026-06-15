import React from 'react'
import Navbar from '../components/Navbar'
import '../style/Home.css'
import About from './About'
import Project from './Project'
import Hero from '../components/Hero'


function Home({projectCount,technologyCount}) {
  return (
    <div  >
      
      

      <div>
      <Hero technologyCount={technologyCount} projectCount={projectCount}/>
      </div>
      
    </div>
  )
}

export default Home
