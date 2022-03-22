import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Contact = () => {
    return ( 
        <section className="contact" id="contact">
            <h3 className="light-section-title">GET IN TOUCH</h3>
            <h3 className="bold-section-title">CONTACT</h3>
            <div className="contacts">
                <div className="contact-card">
                    <div className="box"><AiOutlineMail className="contact-icon"/></div>
                    <div className="contact-text-container"><p>onetruegabrielwolf@gmail.com</p></div>
                </div>
                <div className="contact-card">
                    <div className="box"><AiOutlinePhone className="contact-icon"/></div>
                    <div className="contact-text-container"><p>+57 (310) 403-4165</p></div>
                </div>
                <div className="contact-card">
                    <div className="box"><AiOutlineLinkedin className="contact-icon"/></div>
                    <div className="contact-text-container"><p><a href="https://www.linkedin.com/in/gabriel-wolf-4b961b235/" target="_blank">Find me on LinkedIn by clicking here</a></p></div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;
