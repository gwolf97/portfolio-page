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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo inventore molestiae quas nihil blanditiis vitae nesciunt ipsa necessitatibus, nisi obcaecati praesentium non ea similique animi quos rem sit laborum.</p>
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