
import styled from 'styled-components';
import { useEffect, useState } from 'react';


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

            <div>
                { postsData && postsData.map((post, index) => {
                    console.log(post.title);
                    return (
                        <div>
                            <h3> {post.title} </h3>
                            <p> {post.body} </p>
                        </div>
                    )
                })}
               



            </div>



        </StyledNewsPage>
    )

}


