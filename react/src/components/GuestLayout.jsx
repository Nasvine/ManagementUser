import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';



function GuestLayout() {
    const { token} = useStateContext()
    

    if(token){
        return <Navigate to='/users' />
    }

    return ( 
        <div>
            <div className='login-signup-form animated fadeInDown'>
                <div className="form">
                    <Outlet />
                </div>
            </div>
        </div>
     );
}

export default GuestLayout;