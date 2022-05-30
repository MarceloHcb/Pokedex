import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pokemons from "./Pokemons/Pokemons"
import { PokeInfo } from "./PokeInfo/PokeInfo"
import { Next } from "./Pokemons/Pokemons"
const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Pokemons/>}/>
            <Route exact path="/:name" element={<PokeInfo/>}/>     
            <Route exact path="/:id" element={<PokeInfo/>}/>   
        </Routes>
        
        </BrowserRouter>
    )   
}

export { AppRoutes }