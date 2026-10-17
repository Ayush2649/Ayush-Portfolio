import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Skills from "./sections/Skills.jsx";
import Resume from "./sections/Resume.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-[#FAF7F3] text-[#141413] selection:bg-[#141413] selection:text-[#FAF7F3]">
            <NavBar />
            <main id="main-content">
                <Hero />
                <Projects />
                <Experience />
                <Education />
                <Skills />
                <Resume />
                <Contact />
            </main>
        </div>
    );
};

export default App;