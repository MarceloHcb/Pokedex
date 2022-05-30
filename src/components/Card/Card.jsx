import styled from 'styled-components'
import "./Card.css"
import { Link } from 'react-router-dom'
export const Card = (pokemon) => {    

    return (
        <>  
        <Div>
            {
                pokemon.pokemon.map((item, index) => {
                 
                    return (
                        <>
                        
                            <div className='poks' key={index}>
                                <Link to={`/${item.name}`} >
                                <h2>{item.name} {item.id}</h2>
                                <img src={item.sprites.other.home.front_default} alt="" />
                                <h2>  {item.types[0].type.name}  </h2>
                                </Link>                              
                               
                            </div>

                        </>
                    )
                })
            }

        </Div>
        </>
    )
}

const Div = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
width: 100%;
background-image: linear-gradient(to right, aqua, red);    

`
const H2 = styled.h2`
font-size: 1.5rem;
font-family: "Pokemon";
font-weight: 300;
margin-bottom: 0.2rem;
`