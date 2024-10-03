// images
import img1 from '../assets/skills1.png'
import img2 from '../assets/skills2.png'
import img3 from '../assets/skills3.png'


const Skills = () => {
    return (
        <section className="bg-color skills">
            <div className="container">
                <h1 className="text-center title">SKILLS</h1>
                <div className="row skills-section">
                    <div className="col-md-4">
                        <img src={img1} className="skills-img" />
                        <h3 className="skills-title">Web Development</h3>
                        <p className="skills-desc">React.Js, Angular, Bootstrap</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} className="skills-img"/>
                        <h3 className="skills-title">Time Management</h3>
                        <p className="skills-desc">Agile Scrum Methodology</p>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} className="skills-img"/>
                        <h3 className="skills-title">Server Side Development</h3>
                        <p className="skills-desc">Python, Javascript, C#</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;