// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import EveryMonth from "./components/EveryMonths";
import Service from "./components/Services";
import Library from "./components/Library";
import Contact from "./components/Contact";
import Schedule from "./components/Schedule.jsx"
import Feedback from "./components/Feedback.jsx";
import Price from "./components/Price.jsx";
import Author from "./components/Author.jsx";
import Testimonials from "./components/Testimonials.jsx";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {
    useEffect(() => {
        Aos.init({
            duration: 1800,
            offset: 100,
            disable: "mobile",
        });
    }, []);
    return (
        <>
            <Navbar/>
            <Hero/>
            <Service/>
            <EveryMonth/>
            <Schedule/>
            <Library/>
            <Feedback/>
            <Author/>
            <Testimonials />
            <Price/>
            <Contact/>
        </>
    );
};

export default App;
