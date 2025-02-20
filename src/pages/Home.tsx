
//import React from 'react'

import Header from "../components/home/Header"
//import Hero from "../components/home/Hero"
import Footer from "../components/home/Footer"
import Main from "../components/home/Main"
import ProjectGallery from "../components/projects/ProjectGallery"

function Home() {
  return (
    <div className="text-black bg-black">
        <Header />
        <Main />
        <ProjectGallery />
        <Footer />
    </div>
  )
}

export default Home