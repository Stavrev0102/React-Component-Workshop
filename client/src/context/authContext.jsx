
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import usePersistedState from "../hooks/usePersistedState";
import * as authService from '../services/authService'



const  AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth,setAuth] = usePersistedState('auth',{});
    const [error,setErrors] = useState({});
    const  navigate  = useNavigate();

      const registerSubmitHandler = async(values) =>{
        try {
          const res = await authService.register(
            values.email,
            values.password,
            values.username,
            values.PhoneNumber
            );
            authService.registerInLocalDb({res});
    
            setAuth(res)
            localStorage.setItem('accessToken',res.accessToken);
            navigate('/')
        } catch (error) {
          if(error.status === 409){
            setErrors((state) => ({
              ...state,
              invalid:'A user with the same email already exists'
            }))
          
          } else {
            if (error.invalid) {
              setErrors(state => ({ ...state, invalid: '' }));
          }
          }
        }
       
    
      }
    
      const loginSubmitHandler = async(values) => {
          try {
            const res = await authService.login(values.email,values.password);
          setAuth(res);
          localStorage.setItem('accessToken' , res.accessToken);
          navigate('/')
          } catch (error) {
            if(error.status === 403){
              setErrors((state) => ({
                ...state,
                invalid:'Email or password does not match!'
              }))
            
            } else {
              if (error.invalid) {
                setErrors(state => ({ ...state, invalid: '' }));
            }
            }
          }
          

      }
    
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
      }
    
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email:auth.email,
        isAuthenticated: !!auth.email,
        _id:auth._id,
        invalid:error.invalid
      }
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};


export default AuthContext;