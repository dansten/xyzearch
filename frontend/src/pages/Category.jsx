import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Category() {
    const [category, setCategory] = useState([]);
    let params = useParams()

    const getCategory = async (name) => {
        const api = await fetch(
            `http://127.0.0.1:8000/api/tags/${name}` 
        )
        const data = await api.json()
        setCategory(data);
    }
    useEffect(() => {
        getCategory(params.name);
      }, [params.name]);

    return (
        <div>{category.name}</div>
    )
    }

export default Category