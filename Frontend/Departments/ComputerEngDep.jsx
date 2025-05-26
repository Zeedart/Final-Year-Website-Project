import Header from "../HomepageSection/Header.jsx"
import DeanWords from "../HomepageSection/DeanWords.jsx"
import DepartmentJSON from "../Departments/DepartmentsData.json"
import Footer from "../HomepageSection/Footer.jsx"
import Introduction from "./Introduction.jsx"
import AccordianSection from "../HomepageSection/AccordianSection.jsx"
import styles from "./Department.module.css"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function ComputerEngDep() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]); // Unique key for each route
    return (
        <>
            <Header contact={false} inDepartment={true} department={1} />
            <DeanWords inDepartment={true} department={1} departmentData={DepartmentJSON[1]} />
            <Introduction departmentData={DepartmentJSON[1]} />
            <AccordianSection inDepartment={true} departmentData={DepartmentJSON[1]} />

            <section className={`${styles.departmentStructure}`}>
                <h1>Department Organizational Structure</h1>
                <a href={DepartmentJSON[1].link} className="heroBtn">
                    <button>Click Here</button>
                </a>
            </section>

            <Footer />
        </>
    )
}