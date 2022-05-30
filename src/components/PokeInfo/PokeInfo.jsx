import axios from "axios"
import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BaseUrl } from "../BaseUrl"
import "./PokeInfo.css"

export const PokeInfo = () => {
    // const [loading, setLoading] = useState(true)
   
    const { name } = useParams()
    const [names, setNames]= useState()
    const [image, setImage] = useState()
    const [id, setId] = useState()
    const [abilities, setAbilities] = useState()
    const [types, setTypes] = useState()
    const [data, setData] = useState()
    const [moves, setMoves] = useState()
    const [id1, setId1] = useState()
    const [id2, setId2] = useState()
   
    const pokeInfos = async () => {
        const res = await axios.get(`${BaseUrl}/${name}`)
        setNames(res.data.name)
        console.log(res.data)
        setImage(res.data.sprites.other.dream_world.front_default)
        setId(res.data.id)
        setData(res.data)
        setTypes(res.data.types.map(tp => { return (tp.type.name) }))
        setAbilities(res.data.abilities.map(ab => { return (ab.ability.name) }))
        setMoves(res.data.moves.map(mv => { return (mv.move.name) }))
        setId1(res.data.id+1)
        setId2(res.data.id-1)

        
    }
console.log(id)

    useEffect(() => {
        pokeInfos()
       
       
    }, [])

    return (<>

        {
            <div className="pokeInfo">
               
                <div className="left-info">
                    <h2>Habilidades: {abilities?.map((ability, index) => {
                        return (<li key={index}>{ability}</li>)
                    })}</h2>
                    <h2>Type:{types?.map((type, index) => {
                        return (<li key={index}>{type}</li>)
                    })} </h2>
                </div>
                <div className="center-info">
                    <h1>{names}</h1>
                    <Img src={image} alt="" />
                    <h2> Id: {id}</h2>
                </div>
                <div className="right-info">
                    <h2>Movimentos:{moves?.map((move, index) => {
                        return (<li key={index}>{move}</li>)
                    })} </h2>
                </div>
                <Link to={`/${id1}`} >             

                    <button  className="button1">next</button>
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
