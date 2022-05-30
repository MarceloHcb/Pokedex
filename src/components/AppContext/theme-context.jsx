import { createContext, useState } from "react";
import { withTheme } from "styled-components";

export const themes = {
    light:{
        color:"black",
        background: "white",
    },
    dark:{
        color:"white",
        background:"black",
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) =>{

    const [theme, setTheme] = useState(themes.light)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}