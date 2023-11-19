import { useEffect, useState } from 'react'
import styles  from '../Catalog/Catalog.module.css'
import SingleItem from './SingleItem/SingleItem'
import * as productService from '../../services/productService'
export default function Catalog () {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        productService.getAll()
        .then((res) => setProducts(Object.values(res)));

    },[])
    console.log(products);
    return (
        <section  className={styles.dashboard}>
        <h2>Store</h2>
        <ul className={styles.cardWrapper}>
          {/* Display a li with information about every post (if any)*/}
          {products.map(product => <SingleItem key={product._id}{...product}/>)}
        </ul>
        {/* Display an h2 if there are no posts */}
        <h2>There are no items added yet.</h2>
      </section>
      
    )
}