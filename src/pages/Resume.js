import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Resume = () => (
    <Main title="CV" description="Yufei Zhong's Curriculum vitae">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/cv">Curriculum vitae</Link></h2>
                </div>
            </header>
            <div>
                <iframe src="https://drive.google.com/file/d/11FeO1jIO7UPPOmq68qg6CSmF1mQtEnn8/preview"  height="700" width="100%" allow="autoplay"></iframe>
            </div>
        </article>
    </Main>
);

export default Resume;