
import styled from 'styled-components'; 

import variables from '../globals/variables.js';


const StyledPosts = styled.div`
    // width: 100px; 
    display: flex; 
    flex-direction: column; 
    max-width: 1000px; 
    width: 1000px; 
    gap: 10px;

    align-items: center; 

    
    h3 {
        text-align: center;
        margin-bottom: 20px;
        // margin: 5px 0; 


    }

    div {
        width: 700px; 
        border-top: 2px solid ${variables.colors.dark1};
        // box-shadow: 5px 5px black;
        padding: 25px;
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
