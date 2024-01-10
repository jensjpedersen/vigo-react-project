
import styled from 'styled-components'; 


const StyledPosts = styled.div`
    // width: 100px; 
    display: flex; 
    flex-direction: column; 
    max-width: 1000px; 
    width: 1000px; 

    align-items: center; 

    div {
        width: 500px; 
        background-color: gray;  
    }


`



/**
  * Parameters: 
  *     posts - array with posts
  */ 
export default function Posts({ posts }) {
    console.log('Posts component');

    const postsArr = posts.map((post, index) => {

        return (
            <div key={'post' + index}>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
            </div>
        )
    })



    return (
        <StyledPosts>

            { postsArr }

        </StyledPosts>

    )







}
