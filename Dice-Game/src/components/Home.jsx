import styled from 'styled-components'


const Home = ({ toggle }) => {

    return (
        <HomeParentContainer>
            <img src="/images/dices.png" alt="" />
            <HomeContent>
                <h1>DICE QUEST</h1>
                <button onClick={toggle}>Roll the Dice !</button>
            </HomeContent>
        </HomeParentContainer>
    )
}

export default Home

const HomeParentContainer = styled.div`
padding: 5rem 10rem;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
    
    img {
        width: 50%;
        
    }


`

const HomeContent = styled.div`
    width: 50%;
    font-size: 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    white-space: nowrap;
    


    
    button{
        background-color: black;
        color: white;
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`