import { useNavigate } from 'react-router-dom'
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

function Register() {

    let {registerUser} = useContext(AuthContext)

    const navigate = useNavigate()
    return (
    <div>
        <form onSubmit={registerUser}>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="email" name="email" placeholder="Enter Email" />
            <input type="password" name="password" placeholder="Enter Password" />
            <input type="submit" value="Register"/>
        </form>
        <p onClick={() => navigate('/signin')}>Already have an account? Log in here</p>
    </div>
  )
}

export default Register