import Work from "./Work";
import work from "./workData";

const projects = work.map(obj =>((
    <Work repo={obj.repo} 
          title={obj.title} 
          description={obj.description} 
          languages={obj.languages} 
          images={obj.images}/>)))

const Projects = () => {
    return ( 
        <section className="projects" id="projects"> 
            <div className="description">
                <h3 className="light-section-title">MY WORK</h3>
                <h3 className="bold-section-title">RECENT WORK</h3>
            </div>
            <div className="projects-container">
                {projects}
            </div>
        </section>
     );
}
 
export default Projects;