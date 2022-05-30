import axios from "axios"
import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BaseUrl } from "../BaseUrl"
import "./PokeInfo.css"

export const PokeInfo = () => {

    const { name } = useParams()
    const [pokemon, setPokemon] = useState({
        nome:[],
        id:[],
        image:[],
        abilities:[],
        types:[],
        moves:[],
    })   
   
    const [loading, setLoading] = useState(true)       
    const [id1, setId1] = useState()
    const [id2, setId2] = useState()    
    const pokeInfos = async () => {
        setLoading(true)
        const res = await axios.get(`${BaseUrl}/${name}`)
        setPokemon({
            name:res.data.name,
            id:res.data.id,
            image:res.data.sprites.other.dream_world.front_default,
            abilities:res.data.abilities.map(ab => { return (ab.ability.name) }),
            types:res.data.types.map(tp => { return (tp.type.name) }),
            moves:res.data.moves.map(mv => { return (mv.move.name) }),
        })               
        setId1(res.data.id + 1)
        setId2(res.data.id - 1)       
        setLoading(false)
    }   

    useEffect(() => {
        pokeInfos()        
    }, [])
   
    return (<>

        {

            loading ? <h1>Loading ...</h1> :

                <div className="pokeInfo">

                    <div className="left-info">
                        <h2>Habilidades: {pokemon.abilities?.map((ability, index) => {
                            return (<li key={index}>{ability}</li>)
                        })}</h2>
                        <h2>Tipo: {pokemon.types?.map((type, index) => {
                            return (<li key={index}>{type}</li>)
                        })} </h2>
                    </div>
                    <div className="center-info">
                        <h1>{pokemon.name}</h1>
                        <Img src={pokemon.image} alt="" />
                        <h2> Id: {pokemon.id}</h2>
                    </div>
                    <div className="right-info">
                        <h2>Movimentos:{pokemon.moves?.map((move, index) => {
                            return (<li key={index}>{move}</li>)
                        })} </h2>
                    </div>
                    <Link to={`/${id1}`} >

                        <button className="button1">next</button>
                    </Link>
                    <Link to={`/${id2}`} >


                        <button className="button2">back</button>
                    </Link>

                    <Link to={`/`} >
                        <button className="button">Home</button>
                    </Link>

                </div>
        }
    </>

    )
}
const Img = styled.img`
    width:20rem;
`
