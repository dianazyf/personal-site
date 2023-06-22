import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Resume = () => (
    <Main title="CV" description="Yufei Zhong's CV">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/cv">CV</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Resume;