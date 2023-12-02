
import { useContext, useMemo, useState } from 'react';
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
  const [error,setError] = useState({})

  const initialValues = useMemo(() => ({
    [registerKeys.Email]:'',
    [registerKeys.Password]:'',
    [registerKeys.rePassword]:'',
    [registerKeys.username]:'',
    [registerKeys.PhoneNumber]:'',
  }),[]);
  
  const { values,onChange,onSubmit } = useForm(registerSubmitHandler, initialValues);

   const emailValidator = (email) => {
     if (email.length <= 8) {
       setError((state) => ({
         ...state,
         invalidEmail: "Email should be at least 8 characters!",
       }));
     } else {
       if (error.invalidEmail) {
         setError((state) => ({ ...state, invalidEmail: "" }));
       }
     }
   };

const usernameValidator = (username) => {
  if (username.length === 1) {
    setError((state) => ({
      ...state,
      invalidUsername: "Username should be more than 1 characters",
    }));
  } else {
    if (error.invalidUsername) {
      setError((state) => ({ ...state, invalidUsername: "" }));
    }
  }
};

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
                  name="email"
                  onChange={(e) => {
                    onChange(e);
                    emailValidator(e.target.value);
                  }}
                  value={values.email}
                  // onBlur={emailValidator}
                />
                {error.invalidEmail && (
                  <p className={styles.errorMessage}>{error.invalidEmail}</p>
                )}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="username"
                  placeholder="Enter your Username"
                  required=""
                  name="username"
                  onChange={(e) => {
                    onChange(e);
                    usernameValidator(e.target.value);
                  }}
                  value={values.username}
                />
                 {error.invalidUsername && (
                  <p className={styles.errorMessage}>{error.invalidUsername}</p>
                )}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="number"
                  placeholder="Enter your Phone Number"
                  required=""
                  name="PhoneNumber"
                  onChange={onChange}
                  value={values.PhoneNumber}
                />
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required=""
                  name="password"
                  onChange={onChange}
                  value={values.password}
                />
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  required=""
                  name="rePassword"
                  onChange={onChange}
                  value={values.rePassword}
                />
              </div>

              <button className={styles.button} role="button">
                Register
              </button>
              <div className={styles.login_signup}>
                Already have an account?{" "}
                <Link to="/login" id="signup" className={styles.sign_up}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}