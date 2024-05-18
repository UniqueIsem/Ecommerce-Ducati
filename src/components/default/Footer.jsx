import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <h4>DUCATI</h4>
            </div>
            <div className="vertical-line"></div>
            <div className="footer-info-container">
                <div className="footer-social-media">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <ul className="list-social-media">
                        <li>FACEBOOK</li>
                        <li>INSTAGRAM</li>
                        <li>LINKEDIN</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <p>home-page@ducati.com</p>
                </div>
            </div>
        </footer>
    )
}
