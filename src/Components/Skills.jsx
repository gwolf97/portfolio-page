import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
import {SiPostgresql} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiMaterialui} from 'react-icons/si'


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
             <div className="tech-container">
                <FaNodeJs className="tech-logo node-js"/>
                <p>NodeJs</p>
            </div>
            <div className="tech-container">           
                <SiRedux className="tech-logo redux"/>
                <p>Redux</p>
            </div>
             <div className="tech-container">
                <SiExpress className="tech-logo express"/>
                <p>Express</p>
            </div>
            <div className="tech-container">           
                <DiMongodb className="tech-logo mongo-db"/>
                <p>MongoDB</p>
            </div>
            <div className="tech-container">           
                <AiFillGithub className="tech-logo github"/>
                <p>GitHub</p>
            </div>
            <div className="tech-container">           
                <SiPostgresql className="tech-logo postgresql"/>
                <p>PostgreSQL</p>
            </div>
            <div className="tech-container">           
                <BsBootstrapFill className="tech-logo bootstrap"/>
                <p>Bootstrap</p>
            </div>
            <div className="tech-container">           
                <SiMaterialui className="tech-logo material-ui"/>
                <p>Material UI</p>
            </div>
        </section>
     );
}
 
export default Skills;