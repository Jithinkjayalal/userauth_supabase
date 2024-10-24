import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {
    let navigate =useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }

  return (
    <div>
        <h3>Welcome {token.user.user_metadata.full_name}</h3>
        <button onClick={handleLogout}>Log Out</button>
        </div>
  )
}

export default Homepage