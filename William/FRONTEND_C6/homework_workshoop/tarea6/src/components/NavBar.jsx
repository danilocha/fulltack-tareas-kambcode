import React from "react"
import { Link } from "react-router-dom"
const links=[{
    name:"Home",
    href:"./Home",
    classname:"Home1"
},
{
    name:"WorkExperience",
    href:"./WorkExperience",
    classname:"Home2"
},
{
    name:"NotFound",
    href:"./NotFound",
    classname:"Home3"
}
]
const NavBar = () =>{
    return (
    <div>
        {links.map((x)=>(
            <Link to ={x.href}>{x.name}</Link>
        ))}
    </div>
    )
}
export default NavBar