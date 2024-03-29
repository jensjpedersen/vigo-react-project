import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../globals/variables'


const StyledHeader = styled.header`
    background-color: ${variables.colors.dark1};
    // background-color: hsl(0, 0%, 14%); 
    height: ${variables.dimesions.headerHeight};

    // Floting bar styling
    width: 700px;  
    position: absolute;
    top: 5px; 
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${variables.dimesions.radius.large};
    border: 3px solid ${variables.colors.light1};
    opacity: 0.9;
    box-shadow: 0 0 10px 1px ${variables.colors.dark1};
    

    display: flex; 
    justify-content: space-between; 


    nav {
        display: flex;
        align-items: center;
        margin: 0 4rem;
    }


    ul {
        display: flex; 
        gap: 2rem;

    }

    li {
        list-style: none;
    }


    a {
        text-decoration: none;
        color: ${variables.colors.light2}; 
        font-size: 1.1rem;
        font-weight: 600; 
        display: block; 
        // TODO: text shadow not working 



        &:hover {
            color: white; 
            transform: scale(1.1);
            cursor: pointer;
      }
    }


`


export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <Link to="/">
                    Hjem
                </Link> 
            </nav>

            <nav>
                <ul>
                    <li> <Link to="/writers">Skribenter</Link> </li>
                    <li> <Link to="/news">Nyheter</Link> </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
