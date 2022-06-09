import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BaseUrl } from "../../variables/BaseUrl"

export const usePokeCard = () => {
    const { name } = useParams()
    const [url, setUrl] = useState(`${BaseUrl}/${name}`)
    const [loading, setLoading] = useState(true)   
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
            setUrl(`${BaseUrl}/${pokemon.id0}`)
        }
        else {
            setUrl(`${BaseUrl}/1`)
        }
    }
    return ({
        loading,
        pokemon,
        nextP,
        PreviousP
    })
}