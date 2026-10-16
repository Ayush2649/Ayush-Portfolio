import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {
    return (
        <div className="min-h-screen bg-[#FAF7F3] text-[#141413] selection:bg-[#141413] selection:text-[#FAF7F3]">
            <NavBar />
            <main id="main-content">
                <Hero />
            </main>
        </div>
    );
};

export default App;