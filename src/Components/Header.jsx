import {RiSuitcaseLine} from 'react-icons/ri'

const Header = () => {
    return ( 
        <header id="home">
            <div className="header-container">
                <h1>Hi!<br/>
                I'm Gabriel
                </h1>
                <p>I'm a Front-end Web Developer</p>
                <button>VIEW PORTFOLIO <RiSuitcaseLine className="suitcase"/></button>
            </div>
        </header>
     );
}
 
export default Header;