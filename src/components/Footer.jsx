
const Footer = () => {
    return (
        <section className="main-bgcolor light-color footer-section" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="footer-header">Van Luu</h1>
                    </div>
                    <div className="col-md-6 footer">
                        <h2 className="contact-header">Contact Me</h2>
                        <p className="footer-info">
                            <i className="fas fa-map-marker-alt" />
                            San Diego
                        </p>
                        <p className="footer-info">
                            <i className="fas fa-phone" />
                            619-619-6199
                        </p>
                        <p className="footer-info">
                            <i className="fas fa-envelope" />
                            vanqluu13@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;
