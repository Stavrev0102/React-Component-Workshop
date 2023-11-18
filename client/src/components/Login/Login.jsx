
import  styles from  '../Login/Login.module.css';
import {Link} from 'react-router-dom'

export default function Login () {
    return (
      <section className={styles.home}>
        <div className={styles.formContainer}>
          <i className="uil uil-times form_close" />
          {/* Login From */}
          <div className={styles.formLoginForm}>
            <form className={styles.form}>
              <h2 className={styles.titleLogin}>Login</h2>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required=""
                />
                <i className="uil uil-envelope-alt email" />
              </div>
              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required=""
                />
                <i className="uil uil-lock password" />
                <i className="uil uil-eye-slash pw_hide" />
              </div>
              <button className={styles.button} role='button'>Login Now</button>
              <div className={styles.login_signup}>
                Don't have an account?{" "}
                <Link to="/register" id="signup" >
                  Signup
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}