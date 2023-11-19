import styles  from '../../Catalog/Catalog.module.css'
import {Link} from 'react-router-dom';

export default function SingleItem({
    _id,
    brand,
    model,
    bytes,
    color,
    price,
    imageUrl,
}){
    return (
        <>
        <li className={styles.card}>
        <div className={styles.from}>
            Added by:
        </div>
            <div className="imageBox">
            <img src={imageUrl} alt={brand} />
            </div>

            <div className="desciprionBox">

            <p>
              <span className="brand">{brand}</span>
            </p>
            <p>
              <strong>Model: </strong>
              <span className="model">{model} {bytes}GB </span>
            </p>
            <p>
              <strong>Color: </strong>
              <span className="model">{color}</span>
            </p>
            <p>
              <strong>Price:</strong>
              <span className="value">{price}</span>$
            </p>
            </div>

            <Link to={`details/${_id}`} className={styles.detailsBtn}>
              Details
            </Link>
          </li>
        </>
    )
}