import {RiSuitcaseLine} from 'react-icons/ri'

const Header = () => {
    return ( 
        <header id="home">
            <div className="header-container">
                <h1>Hi!<br/>
                I'm Gabriel
                </h1>
                <p>I'm a Front-end Web Developer</p>
                <a href="#projects"><button>VIEW PORTFOLIO <RiSuitcaseLine className="suitcase"/></button></a>
            </div>
        </header>
     );
}
 
export default Header;