import React, { useContext } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userinfo } from '../authContext/AuthContext';

const RequireLogin = ({children}) => {
    const location = useLocation();

    console.log(location)
    const navigate =useNavigate();
    const loggedinuser = useContext(userinfo);

    // console.log('loggedinuser.first.userName',loggedinuser.first.userName)
 
    if(!loggedinuser.first.userName){
        // return navigate('/login')  // this is navigate return in only in useRducer
        return <Navigate to='/login' state={{location:location}}/>
    }else{
        return children 
    }

}
export default RequireLogin