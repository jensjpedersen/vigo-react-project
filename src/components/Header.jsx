
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    background-color: #333;

    ul {
        display: flex; 
        gap: 1rem;

        li {
            list-style: none;
        }

    }
`


export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/writers">Writers</Link> </li>
                    <li> <Link to="/news">Nyheter</Link> </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
