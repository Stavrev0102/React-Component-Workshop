
    import { useContext, useEffect, useState } from 'react';
import styles from '../Details/Details.module.css';
    import { Link, useNavigate, useParams } from "react-router-dom";
    import * as productService from '../../services/productService';
import AuthContext from '../../context/authContext';
    

export default function Details() {
    const {productId} = useParams();
    const [product,setProduct] = useState({})
    const {_id} = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
      productService.getOneById(productId)
      .then(res => setProduct(res))
    },[productId]);
    
    const onDelete = async() => {
      const confirmation = confirm(`Are you sure you want to delete this product: ${product.brand} ${product.model} `)

      if(confirmation) {
        await productService.remove(product._id);
        navigate('/catalog')
      }
    }
    console.log(product);
    return (
      <section className={styles.details}id="details">
        <div className={styles.detailsWrapper}>
          <p  className={styles.detailsTitle}>Show Details</p>
          <div className={styles.imgWrapper} id="img-wrapper">
            <img src={product.imageUrl} alt="example1" />
          </div>
          { _id === product._ownerId && (
             <div className={styles.actionBtns} id="action-buttons">
             <Link to={`/catalog/details/${productId}/edit`} className={styles.editBtn} id="edit-btn">
               Edit
             </Link>
             <button onClick={onDelete} className={styles.deleteBtn}>Delete</button>
           </div>
          )}
         

          <div  className={styles.infoWrapper} id="info-wrapper">
            <div className={styles.columnDiv1}>
            <p>
              Brand: <span className={styles.detailsBrand} id="details-brand">{product.brand}</span>
            </p>
            <p>
              Model: <span className={styles.detailsModel} id="details-model">{product.model}</span>
            </p>
            <p>
                Color: <span className={styles.detailsColor}>{product.color}</span>
            </p>
            <p>
                Bytes: <span className={styles.detailsBytes}>{product.bytes}</span>
            </p>
            <p>
                VIN-Number: <span className={styles.detailsVinNumber}>{product['vin-number']}</span>
            </p>
            </div>

            <div  className={styles.columnDiv2}>
            <p>
                Screen Size: <span className={styles.detailsScreenSize}>{product['size-screen']}</span>
            </p>
            <p>
                Processor: <span className={styles.detailsProcessort}>{product.processor}</span>
            </p>
            <p>
              Release date: <span className={styles.detailsRelease} id="details-release">{product['released-day']}</span>
            </p>
            <p>
              Value: <span className={styles.detailsValue} id="details-value">{product.price} $</span>
            </p>
            <p>
              Description: <span className={styles.detailsDescription} id="details-description">{product.description}</span>
           
            </p>
            </div>

          </div>
        </div>
      </section>
    );
}