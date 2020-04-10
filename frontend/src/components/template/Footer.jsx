import React from 'react';

import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <span>
                    Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                    <strong> C<span className="text-danger">é</span>sar</strong>
                </span>
            </footer>
        </div>
    );
};

export default Footer;