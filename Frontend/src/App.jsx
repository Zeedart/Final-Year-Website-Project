import { useState } from 'react'
import './App.css'
import Header from "../HomepageSection/Header.jsx"
import DeanWords from "../HomepageSection/DeanWords.jsx"
import FacultyDepartments from '../HomepageSection/FacultyDepartments.jsx'
import londonImg from './assets/london.png';
import newyorkImg from './assets/newyork.png';
import washingtonImg from './assets/washington.png';
import libraryImg from './assets/library.png';
import basketballImg from './assets/basketball.png';
import cafeteriaImg from './assets/cafeteria.png';
import user1Img from './assets/user1.jpg';
import user2Img from './assets/user2.jpg';
import AccordianSection from '../HomepageSection/AccordianSection.jsx';
import Footer from '../HomepageSection/Footer.jsx'
import FacebookFeed from '../HomepageSection/FacebookFeed.jsx'

function App() {


  return (
    <>
      <Header contact={false}/>
      <DeanWords inDepartment={false} />
      <AccordianSection inDepartment={false} />
      <FacultyDepartments />

      <div className='About-section'>
        <h1 className='About-title'>An Overview of the College</h1>
        <p>The College of Engineering Sciences is one of the colleges at Bright Star University,
           established in 2015. It includes three scientific departments: the Department of Computer Engineering,
           the Department of Occupational Safety and Health Engineering, and the Department of Petroleum Geology Engineering.
           Admission to this college is open to students from the General Secondary School (Scientific Stream) who have obtained a percentage of 75% or higher.
           As for specialization, students are directed according to their preferences, taking into account the needs of the departments and their capacity.
           The college also accepts transfer students if they meet the conditions stated in the college's regulations.</p>
      </div>

      <FacebookFeed />

      <Footer />
    </>

  )
}

export default App
