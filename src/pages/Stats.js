import React from "react";
import { Link } from 'react-router-dom';
import Main from "../layouts/Main";

const Stats = () => (
    <Main title="Stats" description="Some statistics about Yufei Zhong and his website">
        <article className="post" id="stats">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
                </div>
            </header>
            <div>Work in Progress</div>
        </article>
    </Main>
);

export default Stats;