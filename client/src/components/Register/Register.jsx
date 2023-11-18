
import styles from '../Register/Register.module.css';
import { Link } from 'react-router-dom';


export default function Register () {
    return (
      <section className={styles.home}>
      <div className={styles.formContainer}>
        <i className="uil uil-times form_close" />
        <div className={styles.formLoginForm}>
          <form className={styles.form}>
            <h2 className={styles.titleLogin}>Register</h2>

            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder="Enter your email"
                required=""
                name='email'
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="Enter your password"
                required=""
                name='password'
              />
            </div>

            <div className={styles.inputBox}>
              <input
                type="password"
                placeholder="Repeat your password"
                required=""
                name='re-password'
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