
import styled from 'styled-components'


const StyledMainPage = styled.div`
  background-color: gray; 

`



export default function MainPage() {
    return (
        <StyledMainPage>
            <div className="text-container">
                <h3>Velkommen</h3>
                <p>På denne siden kan du lese nyhter fra våre skribenter.</p>
            </div>
        </StyledMainPage>
    )
}
