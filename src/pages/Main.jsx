import Abouts from "../components/Abouts";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Social from "../components/Social";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Abouts />
            <Skills />
            <Project />
            <Social />
            <Footer />
        </div>
    )
}
export default Main;