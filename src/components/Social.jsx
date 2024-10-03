import React from 'react';
import Linkedin from '../assets/linkedin-icon.png';
import Gmail from '../assets/gmail.webp';

const Social = () => {
    return (
        <section className="bg-color social-section">
            <div className="container">
                <h1 className="text-center title">CONNECT WITH ME</h1>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/van-luu-b760a8230/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} className="social-img" alt="LinkedIn" />
                    </a>
                    <a href="mailto:vanqluu13@gmail.com">
                        <img src={Gmail} className="social-img" alt="Gmail" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Social;
