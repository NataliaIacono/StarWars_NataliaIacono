import React, { Component } from 'react';

import '../../styles/footer.css';

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <p className="footer">
            Made with <i className="fa fa-heart text-danger" /> by{' '}
            <a className="footer" href="https://github.com/NataliaIacono">
                Natalia Iacono ♥
            </a>
        </p>
    </footer>
);
