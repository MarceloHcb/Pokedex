import { useContext } from "react"
import { ThemeContext, themes } from "../AppContext/theme-context"
import { TogglerButton } from "../Button/Toggler-Button"

export const ThemeTogglerButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    
    return (
        <div>
            <TogglerButton onClick={()=> setTheme(theme === themes.light ? themes.dark : themes.light)}> Toggle </TogglerButton>

        </div>
    )
}