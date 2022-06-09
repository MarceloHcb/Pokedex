import { AppRoutes } from "../../../data/Routes/Routes"
import "./Nintendo.css"
import { ThemeButton } from "../ThemeButton/ThemeButton"
import { useContext } from "react"
import { PokeContext } from "../../../data/services/hooks/contexts/PokeContext"

export const Nintendo = () => {    
    const {theme} = useContext(PokeContext)
    return (<>

        <div className="container"style={{background:theme.background3 }} >
            <div className="container-content">
                <div className="circle-big">
                    <hr />

                </div>
                <div className="circle-big-inside">

                </div>
                <div className="circle-up" >
                    🔺
                </div>
                <div className="circle-down">
                    🔺
                </div>
                <div className="circle-home">

                </div>
                <div className="circle-home-inside">

                </div>

                <div className="circle-big-right">
                    <hr />
                </div>
                <div className="circle-big-right-inside">

                </div>
                <div className="circle-up-right">
                    X
                </div>
                <div className="circle-down-right">
                    B
                </div>
                <div className="circle-right-home">

                </div>
                <div className="circle-right-home-inside">

                </div>
                <div className="center">
                <ThemeButton></ThemeButton>
                    <div className="center-black">
                        <div className="center-content">                           
                       <AppRoutes/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}