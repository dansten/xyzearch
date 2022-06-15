import { useNavigate } from 'react-router-dom'
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'


function LoginForm() {
    let {loginUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const registerHandler = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    return (
    <div>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <input type="submit" value="Log In"/>
        </form>
        <p onClick={registerHandler}>Don't have an account? Register here</p>
    </div>
    )
}

export default LoginForm