import About from "../About/About";
import Contract from "../Contract/Contract";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contract></Contract>
        </div>
    );
};

export default Home;