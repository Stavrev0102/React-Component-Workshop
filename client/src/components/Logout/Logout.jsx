
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext)
    authService.logout()
    .then(() => {
        logoutHandler();
    })
    .catch(err => console.log(err))

return null
}