
import styled from 'styled-components';
import variables from "../globals/variables";
import { useLocation } from 'react-router-dom';


const StyledFooter = styled.footer`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${variables.colors.accent1};
    height: ${variables.dimesions.footerHeight};
    min-width: 700px;

    margin-top: ${props => props.isMainPage ? '0' : '30px'};
`


export default function Footer() {
    const isMainPage = useLocation().pathname === '/';

    return (
        <StyledFooter isMainPage={isMainPage}>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <p>Contact: info@example.com</p>
        </StyledFooter>
    )
}

