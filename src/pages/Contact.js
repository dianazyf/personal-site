import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Contact = () => (
    <Main title="Contact" description="Yufei Zhong's Contact Info">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Contact;