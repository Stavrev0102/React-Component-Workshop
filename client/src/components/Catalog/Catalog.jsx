import styles  from '../Catalog/Catalog.module.css'

export default function Catalog () {
    return (
        <section  className={styles.dashboard}>
        <h2>Store</h2>
        <ul className={styles.cardWrapper}>
          {/* Display a li with information about every post (if any)*/}
          <li className={styles.card}>
            <img src="https://s13emagst.akamaized.net/products/60458/60457155/images/res_4f32400ed4b4e50c33453c7b2d552785.jpg" alt="travis" />
            <p>
              <strong>Brand: </strong>
              <span className="brand">Iphone</span>
            </p>
            <p>
              <strong>Model: </strong>
              <span className="model">14 Pro Max 128GB </span>
            </p>
            <p>
              <strong>Color: </strong>
              <span className="model">Grey</span>
            </p>
            <p>
              <strong>Value:</strong>
              <span className="value">2000</span>$
            </p>
            <a className={styles.detailsBtn} href="">
              Details
            </a>
          </li>
        </ul>
        {/* Display an h2 if there are no posts */}
        <h2>There are no items added yet.</h2>
      </section>
      
    )
}