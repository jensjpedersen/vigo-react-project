



import { useParams, useLocation } from "react-router-dom";
import styled from 'styled-components';


const StyledWritersIdPage = styled.div`
    margin-top: 100px;
`


export default function WritersIdPage() {

    console.log(useLocation().state);

    return (
        <StyledWritersIdPage>
            <h2>Artikler av {useLocation().state}</h2>


        </StyledWritersIdPage>
    )
}
