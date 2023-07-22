import React from 'react';
import {Link} from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';


const Sidebar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={process.env.PUBLIC_URL + '/me.jpeg'} alt=""/>
            </Link>
            <header>
                <h2>Yufei Zhong</h2>
                <p><a href="mailto:yufei.zhong@scheller.gatech.edu">yufei.zhong@scheller.gatech.edu</a></p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>I am a <a href="https://www.scheller.gatech.edu/directory/phd/zhong/index.html"> PhD Candidate</a> in Organizational Behavior at
                Scheller College of Business, Georgia Institute of Technology.
                I received my Bachelor's degree in Psychology from the Pennsylvania State University.
            </p>
            <ul className="actions">
                <li>
                    {!window.location.pathname.includes('/cv') ? <Link to="/cv" className="button">Curriculum vitae</Link> :
                        <Link to="/" className="button">About Me</Link>}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ContactIcons/>
            <p className="copyright">&copy; Yufei Zhong</p>
        </section>
    </section>
)

export default Sidebar;