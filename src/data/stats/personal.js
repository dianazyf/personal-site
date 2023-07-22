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

const data = [
    {
        key: 'age',
        label: 'Years in Research',
        value: <ResearchAge />,
    },
    {
        key: 'countries',
        label: 'Countries & Regions visited',
        value: 16,
        link:
            'https://www.google.com/maps/d/u/0/edit?mid=1FUcVhy3_wVpZFL-px86SnecoHtTncAo&usp=sharing',
    }
];

export default data;