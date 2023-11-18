import styles from '../Home/Home.module.css';

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
        </div>
    )
}