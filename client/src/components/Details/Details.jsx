
    import styles from '../Details/Details.module.css';
    import { Link, useParams } from "react-router-dom";
    

export default function Details() {
    return (
      <section className={styles.details}id="details">
        <div className={styles.detailsWrapper}>
          <p  className={styles.detailsTitle}>Show Details</p>
          <div className={styles.imgWrapper} id="img-wrapper">
            <img src="https://buybest.bg/storage/public/uploads/media-manager/app-modules-shop-models-product/1184/4159/iphone-14-pro-finish-select-202209-6-1inch-spaceblack%20(1).jpeg" alt="example1" />
          </div>
          {/*Edit and Delete are only for creator*/}
          <div className={styles.actionBtns} id="action-buttons">
            <Link to={'caqx'} className={styles.editBtn} id="edit-btn">
              Edit
            </Link>
            <Link to={'#'}  className={styles.deleteBtn} id="delete-btn">
              Delete
            </Link>
          </div>
          <div  className={styles.infoWrapper} id="info-wrapper">
            <div className={styles.columnDiv1}>
            <p>
              Brand: <span className={styles.detailsBrand} id="details-brand">Brand</span>
            </p>
            <p>
              Model: <span className={styles.detailsModel} id="details-model">Model</span>
            </p>
            <p>
                Color: <span className={styles.detailsColor}> same color here</span>
            </p>
            <p>
                Bytes: <span className={styles.detailsBytes}> example 256GB</span>
            </p>
            <p>
                VIN-Number: <span className={styles.detailsVinNumber}>123456789</span>
            </p>
            </div>

            <div  className={styles.columnDiv2}>
            <p>
                Screen Size: <span className={styles.detailsScreenSize}>15 incs</span>
            </p>
            <p>
                Processor: <span className={styles.detailsProcessort}>Intel Core I 5</span>
            </p>
            <p>
              Release date: <span className={styles.detailsRelease} id="details-release">2019</span>
            </p>
            <p>
              Value: <span className={styles.detailsValue} id="details-value">2000</span>
            </p>
            <p>
              Description: <span className={styles.detailsDescription} id="details-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iste earum necessitatibus architecto, voluptatem vel impedit rem suscipit tempora at.</span>
            </p>
            </div>

          </div>
        </div>
      </section>
    );
}