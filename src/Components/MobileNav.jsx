import {AiOutlineClose} from 'react-icons/ai'

const MobileNav = (props) => {
    const noDisplay = {
        display: "none"
    }

    const display = {
        position: "fixed",
        width: "100vw",
    }


    return ( 
        <nav style={props.menuOpen ? display : noDisplay }>
            {props.menuOpen && <div className="close-x" onClick={props.toggle}><AiOutlineClose/></div>}
             <div className="profile-container">
                <img className="profile-pic" src="./images/profile-pic-crop.png" alt="" />
            </div>
            <h2 className="nav-name">Gabriel Wolf</h2>
            <h3 className="nav-title"><span className="light-blue">FRONT-END DEVELOPER</span> IN COLOMBIA</h3>
            <ul>
                <li onClick={props.toggle}>
                    <a href="#home">HOME</a>
                </li>
                <li onClick={props.toggle}> 
                    <a href="#about">ABOUT</a>
                </li>
                <li onClick={props.toggle}>
                    <a href="#skills">SKILLS</a>
                </li>
                <li onClick={props.toggle}>
                    <a href="#projects">PROJECTS</a>
                </li>
                <li onClick={props.toggle}>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default MobileNav;