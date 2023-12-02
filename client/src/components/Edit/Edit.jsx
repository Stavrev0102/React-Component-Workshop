
import styles from '../Create/Create.module.css';
import * as productService from '../../services/productService';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/authContext';
import useForm from '../../hooks/useForm';

export default function Edit () {
  const navigate  = useNavigate();
  const [product,setProduct] = useState({
    brand:'',
    model:'',
    imageUrl:'',
    color:'',
    bytes:'',
    price:'',
    ['vin-number']:'',
    ['size-screen']:'',
    processor:'',
    ['released-date']:'',
    description:''
  });
  const {productId} = useParams();

  useEffect(() => {
    productService.getOneById(productId)
    .then(prod => {
      setProduct(prod)
    })
      
  },[productId])

  const editSubmitHandler = async(values) => {
    
     try {
        await productService.edit(productId,values);
       navigate('/catalog')
     } catch (error) {
        console.log(error);
     }
    }

    const {values,onChange,onSubmit} = useForm(editSubmitHandler, product);
    console.log(product)
    return (
      <section className={styles.create}>
        <div className={styles.form}>
          <h2>Edit your item item</h2>

          <form className={styles.createForm} onSubmit={onSubmit}>
            <div className={styles.column}>
              <div className={styles.firstColumn}>
                <input
                  type="text"
                  name="brand"
                  id="shoe-brand"
                  placeholder="Brand"
                  onChange={onChange}
                  value={values.brand}
                />
                <input
                  type="text"
                  name="model"
                  id="shoe-model"
                  placeholder="Model"
                  onChange={onChange}
                  value={values.model}
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="shoe-img"
                  placeholder="Image url"
                  onChange={onChange}
                  value={values.imageUrl}
                />
                <input
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Color"
                  onChange={onChange}
                  value={values.color}
                />
                <input
                  type="text"
                  name="bytes"
                  id="bytes"
                  placeholder="Bytes"
                  onChange={onChange}
                  value={values.bytes}
                />
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={onChange}
                  value={values.price}
                />
              </div>
              <div className={styles.secondColumn}>
                <input
                  type="text"
                  name="vin-number"
                  id="vin-number"
                  placeholder="Vin-Number"
                  onChange={onChange}
                  value={values["vin-number"]}
                />
                <input
                  type="text"
                  name="size-screen"
                  id="size-screen"
                  placeholder="Screen Size"
                  onChange={onChange}
                  value={values["size-screen"]}
                />
                <input
                  type="text"
                  name="processor"
                  id="processor"
                  placeholder="Processor"
                  onChange={onChange}
                  value={values.processor}
                />
                <input
                  type="text"
                  name="released-date"
                  id="date"
                  placeholder="Released Date"
                  onChange={onChange}
                  value={values["released-date"]}
                />
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={onChange}
                  value={values.description}
                />
              </div>
            </div>
            <div className="editBtn">
            <button className={styles.editbtn} type="submit">Edit </button>
            </div>
          </form>
        </div>
      </section>
    );
}