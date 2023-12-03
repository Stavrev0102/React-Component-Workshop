import * as styles from './About.module.css'
export default function About(){
    return (
        <div className={styles.body}>
      <div>
      <header className={styles.header}>
        <h1>About Us</h1>
      </header>
        <div className={styles.imgBox}>
        <img className={styles.homeImage} src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg" alt="img" />
        </div>
      <section className={styles.content}>
        <p>
          Welcome to our About Us page! We are a fantastic team working together to achieve great things.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan tincidunt orci, eget suscipit
          odio sagittis nec. Integer id tortor nec elit consectetur commodo. Donec non tincidunt nunc.
          Duis hendrerit, elit in mollis commodo, quam velit feugiat lacus, nec laoreet sem eros id orci.
        </p>
      </section>
    </div>
        </div>
    )
}