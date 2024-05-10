import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import list from "../../public/list.json"

function courses() {
    
  return (
    <>

    <Navbar></Navbar>
    
    <div className="min-h-screen">
    <Course></Course>
    </div>
    <Footer></Footer>
 
    </>
  )
}

export default courses
