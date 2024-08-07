import React, { useState } from 'react'
import styled from 'styled-components'


const Game = ({ toggle }) => {
    const [isRulesVisible, setisRulesVisible] = useState(false)
    const [isButtonSelected, setisButtonSelected] = useState(false)

    const toggleRulesVisibility = () => {
        setisRulesVisible((prev) => !prev)

    };
    const toggleButtonSelect = () => {
        setisButtonSelected((prev) => !prev)

    };
    return (
        <>
            <ParentDiv>
                <div className="upperdiv">
                    <div className="totalscore">
                        <h1>0</h1>

                        <p>total score</p>
                    </div>
                    <div className="dice-btns">
                        <p style={{ display: isButtonSelected ? 'block' : 'none' }}>You have not selected any number</p>
                        <div className="btns">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                        <p>Select Number</p>

                    </div>
                </div>
                <MainSection >
                    <button className="dicebtn" onClick={toggleButtonSelect}></button>
                    <p>click Dice to roll</p>
                    <button className='reset-btn'>reset score</button>
                    <button className='rules-btn' onClick={toggleRulesVisibility}>see rules</button>

                </MainSection>


                <RulesSection style={{ display: isRulesVisible ? 'block' : 'none' }}>
                    <h3>How to play dice game</h3>
                    <ul >
                        <li>Select any number</li>
                        <li>Click on dice image</li>
                        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                        <li>if you get wrong guess then  2 point will be dedcuted </li>

                    </ul>
                </RulesSection>
            </ParentDiv>
        </>
    )
}

export default Game

const ParentDiv = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .upperdiv{
        width: 100%;
        padding: 1rem 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .totalscore{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 3rem;
            margin-bottom: -1rem;
        }
    }

    .dice-btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
    

        p:first-of-type {
    color: #ff0000; /* Example color for the first <p> */
    }

  /* Targeting the last <p> inside .dice-btns */
      p:last-of-type {
    font-weight: 650;
  }

        .btns{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            button{
                width: 3rem;
                height: 3rem;
                padding: 0.7rem 1rem;
                background-color: white;
                color: black;
                border: 1px solid black;
                cursor: pointer;
                &:hover{
                    background-color: black;
                    color: white;
                    transform: 1sec;
                }
            }
        }
    }
`


const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.5rem;
    gap: 0.7rem;
    button{
        padding: 0.5rem 1rem;
        width: 100%;
        border-radius: 0.2rem;
        cursor: pointer;
        font-weight: 600;
    }

    .dicebtn {
        background-color: white;
        border:none;
  background-image: url('/images/dice_1.png');
  background-size: cover; /* Ensures the image covers the entire element */
  background-position: center; /* Centers the image in the element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  width: 150px; /* Set width of the element */
  height: 150px; /* Set height of the element */
}
    .reset-btn{
        background-color: white;
        border: 1px solid black;
        
        &:hover{
            background-color: black;
            color: white;
            
        }
    
    }

    .rules-btn{
        background-color: #1a1818;
        border: 1px solid black;
        color: white;
        &:hover{
            background-color: black;
            
        }
    }
    
`
const RulesSection = styled.div`
    background-color: #FBF1F1;
    padding: 0.5rem 1rem;
    h3{
        margin-bottom: 0.2rem;
    }
    ul{
        list-style-type: none;
    }
`