import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "../HomepageSection/Header.jsx"
import DeanWords from "../HomepageSection/DeanWords.jsx"


import londonImg from './assets/london.png';
import newyorkImg from './assets/newyork.png';
import washingtonImg from './assets/washington.png';
import libraryImg from './assets/library.png';
import basketballImg from './assets/basketball.png';
import cafeteriaImg from './assets/cafeteria.png';
import user1Img from './assets/user1.jpg';
import user2Img from './assets/user2.jpg';


function App() {
  

  return (
    <>
      <Header />
      <DeanWords />
      <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        aspernatur facilis quae.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
            asperiores! Quas repellat eaque temporibus cum porro fuga fugit quam
            dignissimos voluptatem unde labore alias et libero minima facere
            consectetur doloremque, ex in distinctio illo magni!
          </p>
        </div>
        <div className="course-col">
          <h3>Degree</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
            asperiores! Quas repellat eaque temporibus cum porro fuga fugit quam
            dignissimos voluptatem unde labore alias et libero minima facere
            consectetur doloremque, ex in distinctio illo magni!
          </p>
        </div>
        <div className="course-col">
          <h3>Post Graduation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
            asperiores! Quas repellat eaque temporibus cum porro fuga fugit quam
            dignissimos voluptatem unde labore alias et libero minima facere
            consectetur doloremque, ex in distinctio illo magni!
          </p>
        </div>
      </div>
    </section>

    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem odio
        modi incidunt temporibus, quaerat necessitatibus?
      </p>
      <div className="row">
        <div className="campus-col">
          <img src={londonImg} alt="Campus" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={newyorkImg} alt="Campus" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src={washingtonImg} alt="Campus" />
          <div className="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>

    <section className="facilites">
      <h1>Our Facilities</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        asperiores accusantium fugiat incidunt consequuntur, omnis tenetur illum
        facilis et? Sint praesentium adipisci molestiae perspiciatis. Minus
        consequatur temporibus dolorem doloremque expedita.
      </p>
      <div className="row">
        <div className="facilities-col">
          <img src={libraryImg} alt="library" />
          <h3>World className Library</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            optio quibusdam veritatis ipsum ratione, voluptatibus labore? A
            perspiciatis nemo sed eaque, est, nulla aliquid excepturi, delectus
            neque recusandae facere impedit.
          </p>
        </div>
        <div className="facilities-col">
          <img src={basketballImg} alt="library" />
          <h3>Largest Play Ground</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            optio quibusdam veritatis ipsum ratione, voluptatibus labore? A
            perspiciatis nemo sed eaque, est, nulla aliquid excepturi, delectus
            neque recusandae facere impedit.
          </p>
        </div>
        <div className="facilities-col">
          <img src={cafeteriaImg} alt="library" />
          <h3>Testy and Healthy Food</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            optio quibusdam veritatis ipsum ratione, voluptatibus labore? A
            perspiciatis nemo sed eaque, est, nulla aliquid excepturi, delectus
            neque recusandae facere impedit.
          </p>
        </div>
      </div>
    </section>

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
