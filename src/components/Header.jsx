import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link as LinkScroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            spy
            smooth
            activeClass="text-black"
            className="cursor-pointer text-gray hover:text-black transition max-lg:text-white"
        >
            {title}
        </LinkScroll>
    );

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500',
                hasScrolled && 'py-7 backdrop-blur-lg'
            )}
        >
            <div className="container mx-auto px-5 flex justify-between items-center">
                {/* Logo on Left */}
                <Link to="/"><img src="/assets/logo.png" alt="logo" className="h-8" /></Link>

                {/* Desktop Navigation Links */}
                <nav className={clsx('hidden md:flex space-x-6 flex-grow justify-center text-gray')}>
                    {isHomePage ? (
                        <NavLink title="Home" />
                    ) : (
                        <Link to="/" className="text-gray hover:text-black transition">Home</Link>
                    )}
                    <NavLink title="Features" />
                    <NavLink title="Pricing" />
                    <NavLink title="Testimonials" />
                    <NavLink title="Help" />
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Link to="/sign-in" className="text-gray-700">Sign In</Link>
                    <Link to="/sign-up" className="border border-red px-8 py-2 rounded-3xl text-red font-bold hover:bg-red hover:text-white transition-colors duration-300">
                        Sign Up
                    </Link>
                </div>

                {/* Burger Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 md:hidden z-50"
                >
                    <span className={clsx('block w-8 h-0.5 bg-black transition-transform duration-300', isOpen && 'bg-white transform rotate-45 translate-y-2')}></span>
                    <span className={clsx('block w-8 h-0.5 bg-black transition-opacity duration-300', isOpen && 'opacity-0')}></span>
                    <span className={clsx('block w-8 h-0.5 bg-black transition-transform duration-300', isOpen && 'bg-white transform -rotate-45 -translate-y-2')}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    'fixed inset-0 h-screen w-screen bg-gray bg-opacity-90 flex flex-col items-center justify-center text-30 text-center transition-transform duration-500 z-40 md:hidden',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                {/* Mobile Nav Links */}
                <nav className="flex flex-col space-y-4">
                    {isHomePage ? (
                        <NavLink title="Home" />
                    ) : (
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    )}
                    <NavLink title="Features" />
                    <NavLink title="Pricing" />
                    <NavLink title="Testimonials" />
                    <NavLink title="Help" />
                </nav>

                {/* Mobile Sign In and Sign Up Buttons */}
                <div className="flex flex-col space-y-4 mt-8">
                    <Link to="/sign-in" className="text-white" onClick={toggleMenu}>Sign In</Link>
                    <Link to="/sign-up" className="border border-red px-8 py-2 rounded-3xl text-red font-bold" onClick={toggleMenu}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
