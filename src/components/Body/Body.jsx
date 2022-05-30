import React from "react"
import { Nintendo } from "../Nintendo/Nintendo"
import "./Body.css"


export const Body = () => {
    return (
        <div className="body">            
            <img className="img" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" alt="" />

            <Nintendo />
        </div>
    )
}
