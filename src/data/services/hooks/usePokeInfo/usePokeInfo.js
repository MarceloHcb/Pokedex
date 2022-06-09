import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl, limit, Limit } from "../../variables/BaseUrl"
import { useParams } from "react-router-dom"

export const usePokeInfo = () => {
    
    const [url, setUrl] = useState(`${BaseUrl}/${limit}`)
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    const poke = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setNext(res.data.next)
        setPrevious(res.data.previous)
        getPokemon(res.data.results)                
        setLoading(false)
    }    
    const getPokemonList = async(offset) =>{
        const response = await fetch(`${BaseUrl}?limit=${Limit}&offset=${offset}`)
        const data = await response.json()
        const names = data.results.map(result => result.name)
        return names
    }
    const getPokemon = async(name) =>{
        const response = await fetch(`${BaseUrl}/${name}`)
        const data = await response.json()        
        return data
    }
    
    
    useEffect(() => {
        
        poke()

    }, [url])  
    
    const [inputs, setInputs] = useState({
        text: ""
    })
    const handleInputChange = (event) => {
        setInputs({
            text: event.target.value
        })
    }        
   
    return ({
        pokemons,
        previous,
        next,
        setUrl,
        setPokemons,
        handleInputChange,
        inputs,
        loading,  
        getPokemonList,  
        getPokemon    
    }   

    )
}