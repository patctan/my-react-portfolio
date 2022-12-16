import React from 'react';
import "./styles/NavTabs.css"

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='NavContainer'>
            <div>
                <a
                // Make About page the home page
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </div>
            <div>
                <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </div>
            <div>
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </div>
            <div>
                <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </div>
        </div>
    );
}

export default NavTabs;