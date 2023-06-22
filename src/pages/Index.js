import React from "react";
import Link from "react-dom";
import Main from '../layouts/Main';

const Description = "Yufei Zhong's personal website";

const Index = () => (
    <Main description={Description}>
        <article className="post" id="index">
            <header>
                <div className="title">
                    <p>
                        A beautiful, responsive, statically-generated,
                        react application written with modern Javascript.
                    </p>
                </div>
            </header>
            <p> Welcome to my website! I am still learning React, please feel free to leave a feedback on the source. </p>
            <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
        </article>
    </Main>
);

export default Index;