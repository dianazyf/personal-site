import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
            </Link>
            <header>
                <h2>Yufei Zhong</h2>
                <p><a href="mailto:yzhong303@gatech.edu">yzhong303@gatech.edu</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>Hi, I&apos;m Yufei (Diana).
                I am a 5th year PhD Candidate <a href="https://www.scheller.gatech.edu/index.html/"> Scheller College of Business</a>.
            </p>

            <p>I have a cat and a minivan</p>
        </section>
    </section>
)

export default Sidebar;