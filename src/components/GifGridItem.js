import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ( {id, title, url} ) => {
    // console.log( props );
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes= {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default GifGridItem;
