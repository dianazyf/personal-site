import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Teaching = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import('../data/teaching.md')
            .then((res) => {
                fetch(res.default)
                    .then((r) => r.text())
                    .then(setMarkdown);
            });
    });

    const count = markdown.split(/\s+/)
        .map((s) => s.replace(/\W/g, ''))
        .filter((s) => s.length).length;

    return (
        <Main title="Teaching" description="">
            <article className="post markdown" id="teaching">
                <header>
                    <div className="title">
                        <h2 data-testid="heading"><Link to="/teaching">Teaching</Link></h2>
                        {/*<p>(in about {count} words)</p>*/}
                    </div>
                </header>
                <Markdown>
                    {markdown}
                </Markdown>
            </article>
        </Main>
    );
};

export default Teaching;