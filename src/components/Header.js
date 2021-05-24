import {Link} from "react-router-dom"

const Header = ()=>{
    return (
        <header className="header">
            <iframe title="BOIDS" src="/JS/boid/index.html"></iframe>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
                <li><Link to="/Contact">Contact Me</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Sites">My Sites</Link></li>
            </ul>
        </header>
    )
}
export default Header