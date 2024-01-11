
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../globals/variables'
import { variance } from 'd3';



const StyledHeader = styled.header`
    background-color: ${variables.colors.dark1};
    height: ${variables.dimesions.headerHeight};

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
                    Home
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
