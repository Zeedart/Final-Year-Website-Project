
import styles from "./Introduction.module.css"

export default function Introduction({departmentData}){

    return (
        <div className={`${styles.IntroductionSection}`}>
            <h1 className={`${styles.IntroductionTitle}`}>{departmentData.introTitle}</h1>
            <p className={`${styles.IntroductionTxt}`}>{departmentData.introTxt}</p>
        </div>
    )
}