import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
    <div className="cell-container">
        <article className="mini-post">
            <header>
                <a>{data.title} {data.journal}</a>
                <br/>
                <br/>
                <p className="note">{data.note}</p>
            </header>
            <div className="description">
                <p>{data.abstract}</p>
                <p className="fullText">
                    {!data.link ? <a/>:<a href={data.link}>Full Text </a>}
                </p>
            </div>
        </article>
    </div>
);

Cell.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
        abstract: PropTypes.string.isRequired,
        note:PropTypes.string,
        journal:PropTypes.string
    }).isRequired,
};

export default Cell;