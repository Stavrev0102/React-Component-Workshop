
import { useContext, useMemo } from 'react';
import useForm from '../../hooks/useForm';
import styles from '../Register/Register.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext';


const registerKeys = {
  Email:'email',
  Password:'password',
  rePassword:'rePassword',
  username:'username',
  PhoneNumber:'PhoneNumber'
}

export default function Register () {
  const {registerSubmitHandler} = useContext(AuthContext)

  const initialValues = useMemo(() => ({
    [registerKeys.Email]:'',
    [registerKeys.Password]:'',
    [registerKeys.rePassword]:'',
    [registerKeys.username]:'',
    [registerKeys.PhoneNumber]:'',
  }),[])
  const { values,onChange,onSubmit } = useForm(registerSubmitHandler, initialValues);

    return (
      <section className={styles.home}>
      <div className={styles.formContainer}>
        <i className="uil uil-times form_close" />
        <div className={styles.formLoginForm}>

          <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.titleLogin}>Register</h2>

            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder="Enter your Email"
                required=""
                name='email'
                onChange={onChange}
                value = {values.email}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="username"
                placeholder="Enter your Username"
                required=""
                name='username'
                onChange={onChange}
                value = {values.username}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="number"
                placeholder="Enter your Phone Number"
                required=""
                name='PhoneNumber'
                onChange={onChange}
                value = {values.PhoneNumber}
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="Enter your password"
                required=""
                name='password'
                onChange={onChange}
                value = {values.password}
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="Repeat your password"
                required=""
                name='rePassword'
                onChange={onChange}
                value = {values.rePassword}
              />
            </div>

            <button className={styles.button} role='button'>Register</button>
            <div className={styles.login_signup}>
              Already have an account?{" "}
              <Link to="/login" id="signup" className={styles.sign_up} >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}