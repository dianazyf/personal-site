import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const About = () => (
    <Main title="About" description="About Yufei Zhong">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/about">About</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default About;