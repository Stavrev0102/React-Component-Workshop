import { useEffect, useState } from 'react'
import styles  from '../Catalog/Catalog.module.css'
import SingleItem from './SingleItem/SingleItem'
import * as productService from '../../services/productService'
import Spinner from '../Spinner/Spinner';
export default function Catalog () {

    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        productService.getAll()
        .then((res) => {
          setIsLoading(false)
          setProducts(res);
          
          return
        })
        .catch(err => console.log(err));
    },[])
    
    return (
      <section  className={styles.dashboard}>
        <div className={styles.spinner}>
          {isLoading === true && <Spinner/>}
        </div>
        <h2>Store</h2>
        <ul className={styles.cardWrapper}>
          {/* Display a li with information about every post (if any)*/}
          {products.map(product => <SingleItem key={product._id}{...product}/>)}
        </ul>
      {products.length === 0 && <h2>There are no items added yet.</h2>}
      </section>
      
    )
}