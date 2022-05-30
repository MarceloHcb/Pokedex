import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Card } from "../Card/Card"
import { PokeInfo } from "../PokeInfo/PokeInfo"
import styled from "styled-components"
import "./Pokemons.css"
import { BaseUrl } from "../BaseUrl"
import { useParams } from "react-router-dom"


const limit = `?limit=10&offset=0`

const Pokemons = () => {
    const {name} = useParams()
    const [url, setUrl] = useState(`${BaseUrl}${limit}`)
    const [pokemonsData, setPokemonsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()      
   
        console.log(url)


    const poke = async () => {       
        setLoading(true)
        const res = await axios.get(url)        
        setNext(res.data.next)
        setPrevious(res.data.previous)
        getPokemon(res.data.results)        
        setLoading(false)

    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url) 
            console.log(result)          
            setPokemonsData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                
                return state;
                
            })
           
        })
    }
    useEffect(() => {
        
        poke()

    }, [url])

    return (<>
        {
            loading ? <h1>Loading ...</h1> :
                <Card pokemon={pokemonsData} />             
                
        }
       
        {previous && <button className="prev" onClick={() => {
            setPokemonsData([])
            setUrl(previous)
        }}>
            Carregar Menos</button>}
        {next && <button button onClick={() => {
            setPokemonsData([])
            setUrl(next)
        }}>
            Carregar Mais</button>
        }
       
    </>

    )
  
}

const Div = styled.div`
    display:none;
`



export default Pokemons