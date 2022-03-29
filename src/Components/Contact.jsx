import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Contact = () => {
    return ( 
        <section className="contact">
            <div id="contact"></div>
            <h3 className="light-section-title">GET IN TOUCH</h3>
            <h3 className="bold-section-title">CONTACT</h3>
            <div className="contacts">
                <div className="contact-card">
                    <div className="box"><AiOutlineMail className="contact-icon"/></div>
                    <div className="contact-text-container"><a href="mailto:onetruegabrielwolf@gmail.com"><p>onetruegabrielwolf@gmail.com</p></a></div>
                </div>
                <div className="contact-card">
                    <div className="box"><AiOutlinePhone className="contact-icon"/></div>
                    <div className="contact-text-container"><a href="tel:+573104034165"><p>+57 (310) 403-4165</p></a></div>
                </div>
                <div className="contact-card">
                    <div className="box"><AiOutlineLinkedin className="contact-icon"/></div>
                    <div className="contact-text-container"><p><a href="https://www.linkedin.com/in/gabriel-wolf-4b961b235/" target="_blank">Find me on LinkedIn</a></p></div>
                </div>
                <div className="contact-card">
                    <div className="box"><AiFillGithub className="contact-icon"/></div>
                    <div className="contact-text-container"><p><a href="https://github.com/gwolf97" target="_blank">Find me on Github</a></p></div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;
