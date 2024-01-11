
import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { fetchData } from '../utils/api.js';
import Posts from '../components/Posts.jsx';


const StyledWritersIdPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    
    h2 {
        margin-bottom: 50px;

    }

`

export default function WritersIdPage() {
    const id = useParams().id;
    let [ postsData, setPostsData ] = useState(null);

    useEffect(() => {
        console.log('useEffect');
        const url = `https://jsonplaceholder.typicode.com/posts/?userId=${id}`; 
        fetchData(url).then(data => setPostsData(data));
    }, [])

    return (
        <StyledWritersIdPage>
            <h2>Artikler av {useLocation().state}</h2>
            { postsData && <Posts posts={postsData}/> }
        </StyledWritersIdPage>
    )
}
