import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        console.log(e.value)
        e.preventDefault()
        navigate('/search/'+input)
        
    }

    return (
        <SearchWrapper>
            <form onSubmit={submitHandler}>
                <input 
                    placeholder={'Search for products'} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
            </form>
        </SearchWrapper>
    )
}

export default Search

const SearchWrapper = styled.div`
    input[type="text"] {
        padding: 0.25rem 0.5rem;
        border-radius: 10px;
        border: 1px solid #454760;
        width: 320px;
        #margin: 0 1rem;
        height: 1.5rem;
        margin-right: 340px;
    }

    input[type="text"]:focus-visible {
        outline: none;
    }
}
` 
