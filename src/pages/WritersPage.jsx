
import { json } from "d3";
import {useEffect, useState} from "react";

import styled from 'styled-components';



const StyledWritersPage = styled.div`
    
    .writers-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        max-width: 1000px;
        justify-content: center;
    }

    img {
        width: 200px;

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

            <h1>Skribenter</h1>

            <h3>Les inlegg fra våres skribenter.</h3>

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



