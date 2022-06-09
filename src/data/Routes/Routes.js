import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokeCard } from "../../ui/components/PokeCard/PokeCard"
import { PokeList } from "../../ui/components/PokeList/PokeList"

export const AppRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PokeList />} />
                <Route exact path="/:name" element={<PokeCard />} />

            </Routes>
        </BrowserRouter>
    )
}