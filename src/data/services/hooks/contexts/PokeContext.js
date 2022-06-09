import { createContext, useState } from "react"
import { themes } from "../../../themes/themes"
export const PokeContext = createContext({})

export const PokeProvider = (props) =>{
    const [theme, setTheme] = useState(themes.light)
    return (
        <PokeContext.Provider value={{theme,
         setTheme}}>
            {props.children}
        </PokeContext.Provider>
    )
}