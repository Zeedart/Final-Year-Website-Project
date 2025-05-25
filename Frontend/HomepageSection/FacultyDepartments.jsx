import { Link } from "react-router-dom"
import CEPIC from "./HomepageAssets/CE-PIC.jpg"
import GEOLOGYPIC from "./HomepageAssets/GEOLOGY-PIC.jpg"
import SAFTEYPIC from "./HomepageAssets/SAFETY-PIC.jpg"

export default function FacultyDepartments() {
    return (
        <section className="Major">
            <h1>Faculty Departments</h1>
            <p>
                The Faculty includes specialized departments focused on academic excellence and practical training in engineering sciences.
            </p>
            <div className="row">
                <div className="Major-col">
                    <Link to={"/Geology"}>
                        <img src={GEOLOGYPIC} alt="Major" />
                        <div className="layer">
                            <h3>Petroleum Geology Engineering</h3>
                        </div>
                    </Link>
                </div>
                <div className="Major-col">
                    <img src={SAFTEYPIC} alt="Major" />
                    <div className="layer">
                        <h3>Occupational Safety and Health <br /> Engineering</h3>
                    </div>
                </div>
                <div className="Major-col">
                    <img src={CEPIC} alt="Major" />
                    <div className="layer">
                        <h3>Computer Engineering</h3>
                    </div>
                </div>
            </div>
        </section >
    )
}