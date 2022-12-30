import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.uid){
       return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;