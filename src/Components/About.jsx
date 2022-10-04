import Fade from "react-reveal/Fade"

const About = () => {
    return ( 
        <section className="about" >
                <div id="about"></div>
                <div className="about-container">
            <Fade left>
                    <h3  className="light-section-title">ABOUT ME</h3>
                    <h3 className="bold-section-title">WHO AM I?</h3>
                    <p><span className="intro">Hi, I'm Gabriel Wolf!</span> I'm a 24 year old American Colombian currently living in Medellin, Colombia. My work history includes titles such as professional hip hop dancer, Los Angeles real estate agent, and social media influencer. I was working mostly as a dancer until the pandemic in 2020. Since then I've been making my living online through social media platforms. The work I do doesn't require much time for me to be successful, so I started using my time trying new things. None caught my intrest more than web development. I really enjoy solving problems, creating pages, and implementing features because it makes me feel like i'm overcomming a challenge everytime I do.</p>
            </Fade>
            <Fade left>
                    <p>I've been working on my tech skills ever since! I made this page and you will find more examples of my work if you read on. I'm very excited to get started working on more projects, so with this information I hope you'll consider me for a front-end developer position at your company.</p>
            </Fade>
                </div>
        </section>
     );
}
 
export default About;