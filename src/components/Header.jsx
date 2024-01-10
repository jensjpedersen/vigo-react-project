
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../globals/variables'


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
      font-size: 1.2rem;
      font-weight: 600; 

      &:hover {
        color: red; 
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
                    <li> <Link to="/writers">Writers</Link> </li>
                    <li> <Link to="/news">Nyheter</Link> </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}
