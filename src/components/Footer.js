import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-4 border-top" style={{ backgroundColor: '#343a40', color: 'white', height: '150px' }}>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <span>© 2021 FoodAdda, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                    <li className="mx-3"><Link to="/about" className="text-muted">About Us</Link></li>
                    <li className="mx-3"><Link to="/contact" className="text-muted">Contact Us</Link></li>
                    <li className="mx-3"><Link to="/privacy" className="text-muted">Privacy Policy</Link></li>
                    <li className="mx-3"><Link to="/terms" className="text-muted">Terms of Service</Link></li>
                </ul>

                <div className="col-md-4 d-flex justify-content-center">
                    <a href="https://facebook.com" className="text-muted mx-2"><i className="fa fa-facebook-f"></i></a>
                    <a href="https://twitter.com" className="text-muted mx-2"><i className="fa fa-twitter"></i></a>
                    <a href="https://instagram.com" className="text-muted mx-2"><i className="fa fa-instagram"></i></a>
                </div>
            </footer>
        </div>
    );
}
