import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';



function DefaultLayout() {
    const {user, token,notification,  setToken, setUser} = useStateContext()

    if(!token){
        return <Navigate to='/login' />
    }

    const onLogout = ev =>{
        ev.preventDefault();
        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
      })

      useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])  
    }
    return ( 
        <div id='defaultLayout'>
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>

            <div className='content'>

                {
                    notification && <div className='notification'>{notification}</div>
                }

                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}

                        <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
                    </div>
                </header>

                    <main>
                        <Outlet />
                    </main>
            </div>
        </div>
     );
}

export default DefaultLayout;