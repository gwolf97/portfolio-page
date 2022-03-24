import Work from "./Work";
import work from "./workData";

const projects = work.map(obj =>(<Work repo={obj.repo} title={obj.title} description={obj.description} languages={obj.languages} img1={obj.img1} img2={obj.img2}/>))

const Projects = () => {
    return ( 
        <section className="projects" id="projects"> 
            <div className="description">
                <h3 className="light-section-title">MY WORK</h3>
                <h3 className="bold-section-title">RECENT WORK</h3>
            </div>
            <div className="projects-container">
            {projects}
            <div className="work-container">
                <h4 className="work-title">GITHUB REPO GALLERY</h4>
                <p className="work-description">Since the beginning of my journey I have logged most of my projects on Github. If you'd like to view more of my work you can check out this gallery I made that will take you to each indvidual repo.<br/> <span>Made using HTML, CSS, and JavaScript.</span></p>
                <div className="work">
                    <img src="./images/gallery1.png" alt="" />
                    <img src="./images/gallery2.png" alt="" />
                </div>
                <a href="https://gwolf97.github.io/github-repo-gallery/" target="_blank"><button className="gallery-btn">View gallery</button></a>
            </div>
            </div>
        </section>
     );
}
 
export default Projects;