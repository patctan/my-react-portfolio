import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage ==='About') {
            return <About />;
        }
        if (currentPage ==='Contact') {
            return <Contact />;
        }
        if (currentPage ==='Portfolio') {
            return <Portfolio />;
        }
        if (currentPage ==='Resume') {
            return <Resume />;
        }
        return <Footer />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            
        </div>
    );
}