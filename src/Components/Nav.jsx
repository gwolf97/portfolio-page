const Nav = () => {
    return ( 
        <nav>
             <div className="profile-container">
                <img className="profile-pic" src="./images/profile-pic.jpeg" alt="" />
            </div>
            <h2 className="nav-name">Gabriel Wolf</h2>
            <h3 className="nav-title"><span className="light-blue">FRONT-END DEVELOPER</span> IN COLOMBIA</h3>
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
                    <a href="#0">PROJECTS</a>
                </li>
                <li>
                    <a href="#0">CONTACT</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;