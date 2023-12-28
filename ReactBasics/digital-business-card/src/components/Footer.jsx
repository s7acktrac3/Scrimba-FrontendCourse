import React from "react"
import github from "../assets/github.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"


export default function Footer() {

return (
    <div className="footer">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={github} alt="" />
    </div>
)

}