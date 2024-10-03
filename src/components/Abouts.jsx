// images
import About from '../assets/about.png'

const Abouts = () => {
    return (
        <section className="about">
            <div className="container">
                <h1 className="title text-center">ABOUT ME</h1>
                <div className="row">
                    <div className="col-md-6 about-list">
                        <h2>Software Developer</h2>
                        <ul className="list">
                            <li>Full Stack Development</li>
                            <li>Creative</li>
                            <li>Passionate</li>
                            <li>Great at communication</li>
                            <li>Adaptability</li>
                            <li>Efficient in Time Management</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img src={About} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Abouts;