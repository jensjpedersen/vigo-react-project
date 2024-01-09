
import { json } from "d3";
import {useEffect, useState} from "react";

import styled from 'styled-components';


const DEBUG_MODE_ON = true;

if (!DEBUG_MODE_ON) {
    console = console || {};
    console.log = function(){};
}




const StyledWritersPage = styled.div`



`


export default function WritersPage() {


    const [writersData, setWritersData] = useState(null)


    useEffect(() => {

        async function fetchWritersData() {
            const url = "https://jsonplaceholder.typicode.com/users"
            const response = await fetch(url); 
            const data = await response.json();
            console.log(data);
            setWritersData(data);
        }

        fetchWritersData()




    }, []) 




    return (
        <StyledWritersPage>

            <h1>Writers data</h1>

            <div className='writers'>

                {writersData && writersData.map((writer, index) => {
                    return ( 
                        <div key={'writer' + writer.id}>
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



