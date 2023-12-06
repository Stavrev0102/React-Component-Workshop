
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
  const {registerSubmitHandler,invalid} = useContext(AuthContext)
  const [error,setError] = useState({})

  const initialValues = useMemo(() => ({
    [registerKeys.Email]:'',
    [registerKeys.Password]:'',
    [registerKeys.rePassword]:'',
    [registerKeys.username]:'',
    [registerKeys.PhoneNumber]:'',
  }),[]);
  
  const { values,onChange,onSubmit } = useForm(registerSubmitHandler, initialValues);

   const emailValidator = () => {
     if (values.email.length <= 8) {
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

const usernameValidator = () => {
  if (values.username.length < 1) {
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
const phoneValidator = () => {
  if (values.PhoneNumber.length !== 9) {
    setError((state) => ({
      ...state,
      invalidNumber: "Phone number should be 10 chars",
    }));
  } else {
    if (error.invalidNumber) {
      setError((state) => ({ ...state, invalidNumber: "" }));
    }
  }
};
const passwordsValidator = () => {
  setError((state) => ({
    ...state,
    smallPass: "",
    includeSpecialSymbol: "",
    passwordsDissmatch: "",
  }));

  if (values.password.length <= 8) {
    setError((state) => ({
      ...state,
      smallPass: "Password should be at least 8 chars",
    }));

    if (!values.password.includes('@')) {
      setError((state) => ({
        ...state,
        includeSpecialSymbol: "Password should include special symbol @",
      }));
    }
  }

  if (values.password !== values.rePassword) {
    setError((state) => ({
      ...state,
      passwordsDissmatch: "Passwords do not match!",
    }));
  }
};
// let isValidForm = false
// Object.values(error).some((el) => el !== "")
const [isValid,setIsValid] = useState(false);

// let isValidForm = Object.values(error).some((el) => el !== "");
// let isValidForm = Object.values(error).some((el) => el === "");

let isValidForm = (Object.values(error).every(error => error === ''));

  console.log(Object.values(error));
  // console.log(isValidForm)

 
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
                    emailValidator();
                  }}
                  // onTouchStart={emailValidator}
                  // onBlur={emailValidator}
                  value={values.email}
                 
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
                    usernameValidator();
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
                  onChange={(e) => {
                    onChange(e);
                    phoneValidator();
                  }}
                  value={values.PhoneNumber}
                />
                 {error.invalidNumber && (
                  <p className={styles.errorMessage}>{error.invalidNumber}</p>
                )}
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required=""
                  name="password"
                  onChange={(e) => {
                    onChange(e);
                    passwordsValidator()
                  }} 
                  // onBlur={passwordsValidator}
                  value={values.password}
                />
                {error.smallPass && (
                  <p className={styles.errorMessage}>{error.smallPass}</p>
                )};
                 {error.includeSpecialSymbol && (
                  <p className={styles.errorMessage}>{error.includeSpecialSymbol}</p>
                )}
              </div>

              <div className={styles.inputBox}>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  required=""
                  name="rePassword"
                  onChange={onChange}
                  onBlur={passwordsValidator}
                  value={values.rePassword}
                />
                {error.passwordsDissmatch && (
                  <p className={styles.errorMessage}>{error.passwordsDissmatch}</p>
                )}
              </div>
                  {(isValidForm || !invalid) && (
                    <button className={styles.button} role="button">
                    Register
                  </button>
                  )}
              
              <div className={styles.login_signup}>
                Already have an account?{" "}
                <Link to="/login" id="signup" className={styles.sign_up}>
                  Login
                </Link>
                {invalid && (
                   <p className={styles.errorMessage}>{invalid}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}