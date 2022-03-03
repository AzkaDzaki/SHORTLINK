import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const [tab, setTab] = useState('')

    useEffect(() => {
        setTab(window.location.pathname.toString())      
    }, [])

    const getTab = () => {
        setTimeout(() => {
            setTab(window.location.pathname.toString())            
        }, 10)
    }


    return ( 
        <nav className="navbar text__icon flex items-center space-x-6">
            <h4>SHORT<span style={{color: '#07CA9A'}}>LINK</span></h4>
            {tab === '/' && <Link className="active" to="/" onClick={getTab}>Home</Link>}
            {tab !== '/' && <Link to="/" onClick={getTab}>Home</Link>}
            {tab === '/about' && <Link className="active" to="/about" onClick={getTab}>About</Link>}
            {tab !== '/about' && <Link to="/about" onClick={getTab}>About</Link>}
        </nav>
     );
}
 
export default Header;