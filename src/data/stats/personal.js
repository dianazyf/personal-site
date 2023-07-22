import React, { useState, useEffect } from 'react';

const ResearchAge = () => {
    const [researchAge, setResearchAge] = useState();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
        const phdStartTime = new Date('2019-08-19T07:30:00');
        setResearchAge(((Date.now() - phdStartTime) / divisor).toFixed(11));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <>{researchAge}</>;
};

const Cups = () => {
    const [cups, setCups] = useState();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24; // ms in aday
        const espressoMachinePurchasedDate = new Date('2021-08-19T07:30:00');
        setCups(((Date.now() - espressoMachinePurchasedDate) / divisor *5 / 7).toFixed(5));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <>{cups}</>;
};

const data = [
    {
        key: 'age',
        label: 'Years in Research',
        value: <ResearchAge />,
    },
    {
        key: 'coffee',
        label: 'Cups of Espresso Consumed (Double Shot)',
        value: <Cups />,
    },
    {
        key: 'countries',
        label: 'Countries & Regions Visited',
        value: 15,
        link:
            'https://www.google.com/maps/d/u/0/edit?mid=1FUcVhy3_wVpZFL-px86SnecoHtTncAo&usp=sharing',
    },
    {
        key: 'pets',
        label: 'Furry Friends at Home',
        value: 3,
    },
    {
        key: 'tricks',
        label: 'Hours Spent Teaching Tricks',
        value: 'Hundreds',
    },
    {
        key: 'pets',
        label: 'Number of Tricks My Doggies Mastered',
        value: 'None',
    },
];

export default data;