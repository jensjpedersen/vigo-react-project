



import { useParams } from "react-router-dom";
import styled from 'styled-components';


const StyledWritersIdPage = styled.div`
    margin-top: 100px;
`




export default function WritersIdPage() {
    return (
        <StyledWritersIdPage>
            <h1>Writer somthing</h1>
            <p> { useParams().id } </p>
        </StyledWritersIdPage>
    )
}
