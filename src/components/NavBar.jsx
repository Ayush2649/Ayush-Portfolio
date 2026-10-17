import React, { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../constants/index.js";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#FAF7F3]/95 backdrop-blur-md border-b border-[#141413]/10 py-3.5 shadow-xs"
                    : "bg-transparent py-5 md:py-6"
            }`}
        >
            <div className="page-container flex items-center justify-between">
                {/* Brand / Logo */}
                <a
                    href="#top"
                    className="group flex items-center gap-3.5 text-left transition-transform duration-200 shrink-0"
                >
                    <div className="w-9 h-9 rounded-full bg-[#141413] text-[#FAF7F3] flex items-center justify-center font-editorial-sans text-xs font-bold tracking-wider">
                        AS
                    </div>
                    <div>
                        <div className="font-editorial-sans font-bold text-base md:text-lg tracking-tight text-[#141413] group-hover:text-[#5C5955] transition-colors leading-tight">
                            {personalInfo.name}
                        </div>
                        <div className="font-editorial-sans text-xs text-[#6B6661] leading-tight">
                            Software &amp; AI Engineer
                        </div>
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                    <ul className="flex items-center gap-5 lg:gap-8">
                        {navLinks.map(({ name, link }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    className="nav-link"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Status Pill */}
                    <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EEE7] border border-[#141413]/10 text-xs font-editorial-sans font-medium text-[#5C5955] whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span>Available for roles</span>
                    </div>

                    {/* Direct Contact Button */}
                    <a
                        href="#contact"
                        className="btn-primary group text-xs sm:text-sm"
                    >
                        <span>Let's Connect</span>
                        <span className="arrow-icon text-xs">↗</span>
                    </a>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    className="md:hidden p-2.5 rounded-xl border border-[#141413]/10 text-[#141413] hover:bg-[#F2EEE7] transition-colors shrink-0"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#FAF7F3] border-b border-[#141413]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <ul className="flex flex-col gap-3 mb-6">
                        {navLinks.map(({ name, link }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-editorial-sans text-lg font-medium text-[#141413] hover:text-[#5C5955] py-2"
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-t border-[#141413]/10 flex flex-col gap-3.5">
                        <div className="inline-flex items-center gap-2 text-xs font-editorial-sans text-[#5C5955]">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                            <span>Available in Mumbai · Open to Remote</span>
                        </div>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-primary w-full group py-3"
                        >
                            <span>Let's Connect</span>
                            <span className="arrow-icon text-xs">↗</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;