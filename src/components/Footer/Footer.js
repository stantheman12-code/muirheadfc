import React from "react";

{/* Footer section component - this a functional component that combines all the child components that make up the Footer section of the webapp */}

export default function Footer() {
    return (
        <div className="FooterSection">

            <h3>Sponsors</h3>
            <section className="sponsors">
                <a href="https://www.adidas.com.au">
                <img src="./assets/sponsor-logo1-120x82.42.png" alt="Adidas" /></a>
                <a href="https://www.kfc.com.au">
                <img src="./assets/sponsor-logo2-120x82.42.png" alt="KFC" /></a>
                <a href="https://www.swinburne.edu.au">
                <img src="./assets/sponsor-logo4-120x82.42.png" alt="Swinburne" /></a>
            </section>

            <div className="admin">
                <address>
                    <a href="mailto:admin@muirheadfc.com">Administrator</a>
                    <br />
                    <small>&copy; Muirhead FC</small>
                </address>
            </div>
        </div>
    );
}