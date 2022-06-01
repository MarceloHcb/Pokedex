import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pokemons from "./Pokemons/Pokemons"
import { PokeInfo } from "./PokeInfo/PokeInfo"
const AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Pokemons/>}/>
            <Route exact path="/:name" element={<PokeInfo/>}/>               
        </Routes>
        
        </BrowserRouter>
    )   
}

export { AppRoutes }