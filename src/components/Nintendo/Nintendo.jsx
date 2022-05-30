import { AppRoutes } from "../AppRoutes"
import Pokemons from "../Pokemons/Pokemons"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import "./Nintendo.css"

export const Nintendo = () => {
    return (<>

        <div className="container">
            <div className="container-content">
                <div className="circle-big">
                    <hr />

                </div>
                <div className="circle-big-inside">

                </div>
                <div className="circle-up">
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
                    <div className="center-black">
                        <div className="center-content">
                            {/* <ThemeTogglerButton className="tg"/> */}
                            <AppRoutes />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}