
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const  AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth,setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {}
      });
      
      const  navigate  = useNavigate()
      const registerSubmitHandler = async(values) =>{
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
      }
    
      const loginSubmitHandler = async(values) => {
        const res = await authService.login(values.email,values.password);
        setAuth(res);
        localStorage.setItem('accessToken' , res.accessToken);
        navigate('/')
      }
    
      const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    
        console.log('done')
        navigate('/')
      }
    
      const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email:auth.email,
        isAuthenticated: !!auth.email,
        _id:auth._id
      }
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};


export default AuthContext;