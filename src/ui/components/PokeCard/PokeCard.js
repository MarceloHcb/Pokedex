import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import "./PokeCard.css"
import { usePokeCard } from "../../../data/services/hooks/usePokeCard/usePokeCard"
import { PokeContext } from "../../../data/services/hooks/contexts/PokeContext"

export const PokeCard = () => {
    const { theme } = useContext(PokeContext)
    const {
        loading,
        pokemon,
        nextP,
        PreviousP
    } = usePokeCard()

    return (<>

        {
            loading ? <H1>Loading ...</H1> :

                <PokeInfo className="pokeInfo" style={{ background: theme.background1 }}>
                    <div className="left-info">
                        <h2>Habilidades: {pokemon.abilities?.map((ability, index) => {
                            return (<li key={index}>{ability}</li>)
                        })}</h2>
                        <h2>Tipo: {pokemon.types?.map((type, index) => {
                            return (<li key={index}>{type}</li>)
                        })} </h2>
                    </div>
                    <div className="center-info">
                        <H1 style={{ color: theme.colorH1 }}>{pokemon.name}</H1>
                        <Img src={pokemon.image} alt="" />
                        <h2> Id: {pokemon.id}</h2>
                    </div>
                    <div className="right-info">
                        <h2>Movimentos:{pokemon.moves?.map((move, index) => {
                            return (<li key={index}>{move}</li>)
                        })} </h2>
                    </div>

                    <button className="button1" style={{ background: theme.backgroundButton, color: theme.colorButton }} onClick={() => {
                        nextP()
                    }}>next</button>

                    <button className="button2" style={{ background: theme.backgroundButton, color: theme.colorButton }} onClick={() => {
                        PreviousP()
                    }}>back</button>

                    <Link to={"/"}>
                        <button className="button" style={{ background: theme.backgroundButton, color: theme.colorButton }}>Home</button>
                    </Link>


                </PokeInfo>
        }
    </>

    )
}
const Img = styled.img`
    width:20rem;
`
const H1 = styled.h1`
    font-family: "Pokemon";
     -webkit-text-stroke-width: 2px;
     -webkit-text-stroke-color: rgb(1,188,221);     
     font-size: 5rem;    
`
const PokeInfo = styled.div`
 display: flex;    
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 500vh;
    gap: 5px;     
`