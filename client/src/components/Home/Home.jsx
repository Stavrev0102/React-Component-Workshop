import styles from '../Home/Home.module.css';
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className={styles.section}>
            {/* <div className={styles.imageBox}>
            <img src={'/images/19366.jpg'} alt="Example" />
            </div> */}
            <h2 className={styles.title}>Example.com</h2>
            <p className={styles.homeText}>Welcome to Example.com</p>
            <p className={styles.homeText}>If you want Tech items you are on right spot here!</p>
            <p className={styles.homeText}>Enjoy</p>
            <p className={styles.homeText}> While you're thinking about what you want to buy, do you want to check yourself?
               <div className={styles.linkDiv}>
               <Link to={'/country-capital-game'} className={styles.link} >Country-Capital Game</Link>
                </div> 
            </p>
        </div>
    )
}