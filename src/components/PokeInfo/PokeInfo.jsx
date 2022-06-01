import axios from "axios"
import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BaseUrl } from "../BaseUrl"
import "./PokeInfo.css"

export const PokeInfo = () => {
    const { name } = useParams()
    const [url, setUrl] = useState(`${BaseUrl}/${name}`)
    const [loading, setLoading] = useState(true)
    const [nextPoke, setNextPoke] = useState()
    const [pokemon, setPokemon] = useState({
        nome: [],
        id: [],
        image: [],
        abilities: [],
        types: [],
        moves: [],
        id1: [],
        id0: [],
    })

    const pokeInfos = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setPokemon({
            name: res.data.name,
            id: res.data.id,
            image: res.data.sprites.other.dream_world.front_default,
            abilities: res.data.abilities.map(ab => { return (ab.ability.name) }),
            types: res.data.types.map(tp => { return (tp.type.name) }),
            moves: res.data.moves.map(mv => { return (mv.move.name) }),
            id1: res.data.id + 1,
            id0: res.data.id - 1,
        })
        setLoading(false)
    }

    useEffect(() => {
        pokeInfos()
    }, [url])
    const nextP = () => {
        if (pokemon.id1 > 0) {
            setUrl(`${BaseUrl}/${pokemon.id1}`)
        }
        else {
            setUrl(`${BaseUrl}/1`)
        }
    }
    const PreviousP = () => {
        if (pokemon) {
            setUrl(`${BaseUrl}/${pokemon.id1}`)
        }
        else {
            setUrl(`${BaseUrl}/1`)
        }
    }
    
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


                    <button className="button1" onClick={() => {
                        nextP()
                    }}>next</button>                   

                    <button className="button2" onClick={() => {
                       PreviousP()
                    }}>back</button>

                    <Link to={"/"}>
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
