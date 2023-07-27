import Logo from "./Images/ibm-logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo"/>
        </div>
    )

}

export default Header;