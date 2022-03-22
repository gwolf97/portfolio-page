const Work = (props) => {
    return ( 
        <div className="work-container">
                <h4 className="work-title">{props.title}</h4>
                <p className="work-description">{props.description}<br/> <span>Made using {props.languages}</span></p>
                <div className="work">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                </div>
                <button><a href={props.repo} target="_blank">View repo</a></button>
            </div>
     );
}
 
export default Work;