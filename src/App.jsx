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


function App() {


  return (
    <>
      <Header />
      <DeanWords />
      <AccordianSection />
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

      <section className="testi">
        <h3>What Our Students Says</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nostrum
          ipsum modi voluptate. Cum ducimus animi tenetur voluptas provident vel.
        </p>
        <div className="row">
          <div className="testi-col">
            <img src={user1Img} alt="user1" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ducimus excepturi, suscipit qui nostrum hic beatae.</p>
              <h3>Browni Boron</h3>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-solid fa-star"></i>
              <i className="fa fa-regular fa-star"></i>
            </div>
          </div>
          <div className="testi-col">
            <img src={user2Img} alt="user2" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ducimus excepturi, suscipit qui nostrum.
                <h3>Beneth Yest</h3>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>Enroll For Our Various Online Courses<br /> Anywhere from the World</h1>
        <a href="" className="hero-btn">CONTACT US</a>
      </section>

      <section className="footer">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum suscipit vel velit iure, <br />minus eaque totam ducimus libero. Labore?</p>
        <div className="icons">
          <i className="fa fa-brands fa-facebook"></i>
          <i className="fa fa-brands fa-instagram"></i>
          <i className="fa fa-brands fa-twitter"></i>
          <i className="fa fa-brands fa-linkedin"></i>
        </div>
        <p>Made with <i className="fa fa-sharp fa-solid fa-heart"></i> Pabin(CodeMode365)</p>
      </section>
    </>

  )
}

export default App
