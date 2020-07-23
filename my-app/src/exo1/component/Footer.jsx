import React from 'react';
import "../exo1.css"

const Footer = ({ legalMention }) => {
    return (
        <div className={'footer'}>
            <span className={'footerText'}>{legalMention}</span>
        </div>
    );
};

export default Footer;