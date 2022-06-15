import { useEffect, useState } from 'react';
import Search from './Search'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const [tags, setTags] = useState([])
    useEffect(() => {
        getTags();
    },[])

    // TODO: Implement search function, http://127.0.0.1:8000/api/products/custom/?search=
    const getTags = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/tags/");
        const data = await api.json();
        setTags(data);
    };


    return (
        <header>
            <div>
                <h3 onClick={navigate('/')}>XYZearch</h3>
                <Search />
                <button>Sign Up</button>
            </div>
            <div>
                <ul>
                    <li>Trending</li>
                    <div>
                        <li><span>All Categories</span></li>
                        {tags.map((tag) => {
                            return (
                            <div key={tag.id}>
                                <li>{tag.name}</li>
                            </div>
                            );
                        })}
                    </div>
                    <li>About</li>
                    <li>Submit</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar