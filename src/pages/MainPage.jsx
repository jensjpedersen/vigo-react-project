
import styled from 'styled-components'

import bgImage from '../../public/mpv-shot0001.jpg'
import variables from '../globals/variables'



const StyledMainPage = styled.div`


    background-image:  url(${bgImage}); 
    background-size: cover; 

    // min-height: calc(100vh - ${variables.dimesions.headerHeight});
    min-height: 100vh;


    .text-container {
        padding: 20px 20px;
        box-shadow: 0 0 5px 2px black;
        background-color: ${variables.colors.accent1};
        opacity: 0.9;
        width: 500px;
        border-radius: ${variables.dimesions.radius.small}; 

        position: absolute;
        top: 70%;
        left: 15%;

        h2 {
            margin-bottom: 5px;
        }
    }
`



export default function MainPage() {
    return (
        <StyledMainPage>
            <div className="text-container">
                <h2>Velkommen</h2>
                <p>På denne siden kan du lese nyhter fra våre skribenter.</p>
            </div>
        </StyledMainPage>
    )
}
