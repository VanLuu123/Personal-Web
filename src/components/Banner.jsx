// assets
import self from '../assets/pic.jpg'

const Banner = () => {
    return (
        <section className='main-bgcolor light-color banner-section'>
            <div className="container">
                <div className="row">
                    <div className="img col-md-6">
                        <img src={self} alt='self-protrait'/>
                    </div>
                    <div className="col-md-6 intro-sec">
                        <div className="intro">
                            <h1>Hello my name is Van! </h1>
                            <p className="banner-p">
                                I graduated from San Diego State University with a passion for building web applications and software development.  
                            </p>
                        </div>
                        <div className="click-btn">
                            <a href="https://www.linkedin.com/in/van-luu-b760a8230/" className="btn btn-white">
                                <i class="far fa-play-circle fa-2x watch-btn" />
                                Click Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner