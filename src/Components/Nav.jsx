const Nav = () => {

    return ( 
        <nav>
             <div className="profile-container">
                <img className="profile-pic" src="./images/profile-pic-crop.png" alt="" />
            </div>
            <h2 className="nav-name">Gabriel Wolf</h2>
            <h3 className="nav-title light-blue">FRONT-END DEVELOPER</h3>
            <ul>
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#skills">SKILLS</a>
                </li>
                <li>
                    <a href="#projects">PROJECTS</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;