import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles
import Main from './layouts/Main'; // fallback for lazy pages


const NotFound = lazy(() => import('./pages/NotFound'));
const Stats = lazy(() => import('./pages/Stats'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));


const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Main />}>
            <Routes>
                <Route  path="/" element={<About />} />
                <Route  path="/stats" element={<Stats />} />
                <Route  path="/cv" element={<Resume />} />
                <Route  path="/research" element={<Projects />} />
                <Route  path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;