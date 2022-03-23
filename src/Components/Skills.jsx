import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'


const Skills = () => {
    return ( 
        <section className="skills" id="skills">
            <div className="description">
                <h3 className="light-section-title">MY SPECIALTY</h3>
                <h3 className="bold-section-title">MY SKILLS</h3>
                <p>My skills are are always growing! Right now HTML, CSS, JavaScript, and React are my favorite tools for creating websites. I am also familliar with GitHub, Node Package Manager, and CSS Grid. The other great things about me are that I understand assignments when they are given to me, I value excellent communication, I am patient, and I work well with others. If that sounds useful to you now I'm sure that after joining a team these skills will reach new heights!</p>
            </div>
            <div className="tech-container">
                <AiFillHtml5 className="tech-logo html"/>
                <p>HTML5</p>
            </div>
             <div className="tech-container">
                <IoLogoCss3 className="tech-logo css"/>
                <p>CSS3</p>
            </div>
             <div className="tech-container">
                <SiJavascript className="tech-logo javascript"/>
                <p>JavaScript</p>
            </div>
            <div className="tech-container">           
                <FaReact className="tech-logo react"/>
                <p>React</p>
            </div>

        </section>
     );
}
 
export default Skills;