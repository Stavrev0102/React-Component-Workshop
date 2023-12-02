import { useContext } from "react";
import { Outlet,Navigate } from "react-router-dom";
import AuthContext from "../../context/authContext";

export default function GuessGuard(props){
    const {isAuthenticated, _id } = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to={`/catalog/profile/${_id}`}/>
    }
    return <Outlet />
}