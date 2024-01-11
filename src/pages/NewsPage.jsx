import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Posts from '../components/Posts.jsx'; 
import variables from '../globals/variables.js';



const StyledNewsPage = styled.div`

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;


    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
    }

    h1 {
        // margin: 50px 0;
        margin-bottom: 10px;
    }


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
            <div className="header">

                <h1>Siste nyhter</h1>
                <p>Les siste saker fra våre skribenter</p>

            </div>
            { postsData && <Posts posts={postsData}/> }
        </StyledNewsPage>
    )

}


