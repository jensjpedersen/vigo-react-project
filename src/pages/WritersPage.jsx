
import { json } from "d3";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import styled from 'styled-components';
import variables from "../globals/variables";
import SingleWriterPage from "./SingleWriterPage";
import { fetchData } from "../utils/api";



const StyledWritersPage = styled.div`
    
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;



    .header-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
    }

    .writers-container {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        max-width: 1000px;
        justify-content: center;


        h3 {
            text-align: center;
            margin-bottom: 10px;
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        p {
            text-align: center;
        } 


    }

    img {
        width: 200px;

    }


    .writer {
        padding: 25px;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: white;

        &:hover {

            background-color: ${variables.colors.accent2};
            scale: 1.05;
            border-radius: 3px;
            cursor: pointer;

            box-shadow: 10px 10px 0px 1px ${variables.colors.dark1};


            h3 {
                overflow: visible;
            }
        }
    }


`


export default function WritersPage() {


    const [writersData, setWritersData] = useState(null)


    useEffect(() => {

        const url = "https://jsonplaceholder.typicode.com/users"
        fetchData(url).then(data => setWritersData(data))

    }, []) 




    return (
        <StyledWritersPage>


            <div className="header-container">
                <h1>Skribenter</h1>
                <p>Les inlegg fra våre skribenter.</p>
            </div>


            <div className='writers-container'>

                {writersData && writersData.map(writer => {
                    return ( 
                        <Link to={`/writers/${writer.id}`} key={'writer' + writer.id} className='writer' state={writer.name}>
                                <h3> { writer.name }</h3>
                                <img src="../../public/blank-profile-picture-973460_960_720.png"/>
                                <p> {writer.email}</p>
                        </Link>
                    )

                })}
            </div>


        </StyledWritersPage>
    )
        










}



