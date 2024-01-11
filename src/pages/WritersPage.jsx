
import { json } from "d3";
import {useEffect, useState} from "react";

import styled from 'styled-components';
import variables from "../globals/variables";



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

        }

    }

    img {
        width: 200px;

    }


    .writer {
        padding: 25px;
        transition: all 0.2s ease-in-out;

        &:hover {

            background-color: ${variables.colors.accent2};
            scale: 1.05;
            border-radius: 3px;
            cursor: pointer;

            box-shadow: 10px 10px 0px 1px ${variables.colors.dark1};
        }
    }


`


export default function WritersPage() {


    const [writersData, setWritersData] = useState(null)


    useEffect(() => {

        async function fetchWritersData() {
            const url = "https://jsonplaceholder.typicode.com/users"
            const response = await fetch(url); 
            const data = await response.json();
            setWritersData(data);
        }

        fetchWritersData()




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
                        <div key={'writer' + writer.id} className='writer' >
                            <h3> { writer.name }</h3>
                            <img src="../../public/blank-profile-picture-973460_960_720.png"/>
                            <p> {writer.email}</p>
                        </div>
                    )

                })}
            </div>


        </StyledWritersPage>
    )
        










}



