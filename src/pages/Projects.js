import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

import Cell from '../components/Research/Cell';
import data from '../data/research';

const Projects = () => (
    <Main title="Research" description="Yufei Zhong's Research and Publications">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/research">Research</Link></h2>
                </div>
            </header>
            {data.map((project) => (
                <Cell
                    data={project}
                    key={project.title}
                />
            ))}
        </article>
    </Main>
);

export default Projects;