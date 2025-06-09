import React from 'react';
import styles from './Dashboard.module.css';
import pfp from './images/profile-1.jpg';
import logo from './images/logo.png';
import profile2 from './images/profile-2.jpeg';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([])
  const StudentID = 212084

  useEffect(() => {
    fetch(`http://localhost:8081/marks/${StudentID}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  console.log(data)

  // ex:  {MarkID: 119, StudentID: 212084, SubjectID: 17, Semester: 1, AttemptNumber: 1, …}

  function ShowSubjects() {
    const groupedBySemester = {};

    // Group subjects by semester
    data.forEach(subject => {
      if (!groupedBySemester[subject.Semester]) {
        groupedBySemester[subject.Semester] = [];
      }
      groupedBySemester[subject.Semester].push(subject);
    });

    return (
      <>
        {Object.entries(groupedBySemester).map(([semester, subjects]) => (
          <>
            <h1 style={{marginBottom: "2%"}}>Semester {semester}</h1>
            <div className='arrange' style={{marginBottom: "5%"}}>
              {subjects.map(({ SubjectID, SubjectName, SubjectCode, Mark }) => {
                const progressClass =
                  Mark >= 75 ? "high" : Mark >= 50 ? "medium" : "low";

                return (
                  <div key={SubjectID} className={styles.subjectCard}>
                    <h1>{SubjectName}</h1>
                    <small className={styles.textMuted}>{SubjectCode}</small>
                    <div
                      className={`${styles.progress} ${styles[progressClass]}`}
                      style={{ "--percentage": Mark }}
                    >
                      <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                        <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div className={styles.number}>
                        <p>{Mark}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </>
        ))}
      </>
    );
  }


  const percentage = 75; // Precentagse HERE!!!!!
  const progressClass =
    percentage >= 75 ? 'high' :
      percentage >= 50 ? 'medium' : 'low';

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.active}`}>
        <div className={styles.logo} title="University Management System">
          <img src={logo} alt="University Logo" />
          <h2>
            U<span className={styles.danger}>M</span>S
          </h2>
        </div>

        <div className={styles.navbar}>
          <a href="#home" className={styles.active}>
            <h3>Home</h3>
          </a>
          <a href="#exam">
            <h3>Examination</h3>
          </a>
          <a href="#password">
            <h3>Change Password</h3>
          </a>
          <a href="#logout">
            <h3>Logout</h3>
          </a>
        </div>

        <div className={styles.themeToggler}>
          <span className={`material-icons-sharp ${styles.active}`}>{/* icon link */}</span>
          <span className="material-icons-sharp">{/* icon link */}</span>
        </div>
      </header>
      <aside className={styles.aside}>
        <div className={styles.profile}>
          <div className={styles.top}>
            <div className={styles.profilePhoto}>
              <img src={pfp} alt="Profile" />
            </div>
            <div className={styles.info}>
              <p>Hey, <b>Alex</b></p>
              <small className={styles.textMuted}>12102030</small>
            </div>
          </div>
          <div className={styles.about}>
            <h5>Course</h5>
            <p>BTech. Computer Science & Engineering</p>
            <h5>DOB</h5>
            <p>29-Feb-2020</p>
            <h5>Contact</h5>
            <p>1234567890</p>
            <h5>Email</h5>
            <p>unknown@gmail.com</p>
            <h5>Address</h5>
            <p>Ghost town Road, New York, America</p>
          </div>
        </div>
      </aside>

      <main className={styles.main}>
        <h1>Progress</h1>
        <div className={styles.subjects}>
          {ShowSubjects()}
        </div>
      </main>

      <div className={styles.right}>
        <div className={styles.announcements}>
          <h2>Announcements</h2>
          <div className={styles.updates}>
            <div className={styles.message}>
              <p><b>Academic</b> Summer training internship with Live Projects.</p>
              <small className={styles.textMuted}>2 Minutes Ago</small>
            </div>
            {/* Add other announcements here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;