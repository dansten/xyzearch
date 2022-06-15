import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/search/'+input)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    placeholder={'Search for products'} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
            </form>
        </div>
    )
}

export default Search