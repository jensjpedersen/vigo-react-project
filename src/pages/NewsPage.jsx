import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Posts from '../components/Posts.jsx'; 



const StyledNewsPage = styled.div`
    background-color: #333;

`

export default function NewsPage() {
    const [ postsData, setPostsData ] = useState(null)


    useEffect(() => {

        async function fetchPosts() {
            const url = "https://jsonplaceholder.typicode.com/posts?_limit=10"; 
            const res = await fetch (url); 
            const data = await res.json(); 
            setPostsData(data)
        }

        fetchPosts()


    }, [])





    return (
        <StyledNewsPage>
            <h1>News page</h1>
            <p>Les sisten inlegg</p>
            { postsData && <Posts posts={postsData}/> }
        </StyledNewsPage>
    )

}


