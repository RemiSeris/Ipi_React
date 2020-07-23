import React from 'react';
//import './footer.css';

const Footer = ({ legalMention }) => {
    return (
        <div className={'footer'}>
            <span className={'footer__legal'}>{legalMention}</span>
        </div>
    );
};

export default Footer;