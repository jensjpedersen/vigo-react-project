
import styled from 'styled-components';
import variables from "../globals/variables";


// 698

const StyledFooter = styled.footer`


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: ${variables.colors.accent1};
    height: ${variables.dimesions.footerHeight};
    min-width: 700px;
`


export default function Footer() {
    return (
        <StyledFooter>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <p>Contact: info@example.com</p>
        </StyledFooter>
    )
}

