import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Submit() {
    let [ dbUser, setDbUser] = useState([]);
    let { user, authTokens } = useContext(AuthContext)
    const navigate = useNavigate()

    let getUser = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/users/${user.user_id}`)
        const data = await response.json()
        console.log(data)
        setDbUser(data)
    }

    let addProduct = async (e) => {
        e.preventDefault()
        console.log(user)
        let response = await fetch('http://127.0.0.1:8000/api/products/add', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                'user':dbUser,
                'name':e.target.name.value, 
                'description':e.target.description.value, 
                'body':e.target.body.value,
                'website':e.target.website.value
            })
        })
        if (response.status === 200) {
            console.log(response)
        } else {
            alert('Something went wrong. Status Code: '+response.status)
        }
    }

    useEffect(() => {
        getUser()
    },[])
    return (
        <div>
        {user ? (
            <form onSubmit={addProduct}>
                <input type="text" name="name" placeholder="Enter name" />
                <input type="text" name="description" placeholder="Enter description" />
                <input type="text" name="body" placeholder="Enter body" />
                <input type="url" name="website" placeholder="Enter website" />
                <input type="submit" value="Sumbit Product"/>
            </form>
        ) : (
            <p onClick={() => navigate('/signin')}>You need to be signed in to add a product for submission. Click here!</p>
        )}
        </div>
        
    )
}

export default Submit