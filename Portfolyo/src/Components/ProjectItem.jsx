import React from 'react'
import PropTypes from 'prop-types';

function ProjectItem({ image, name }) {
    return (
        <div className='projectItem'>
            <div className='picture'>
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
        </div>
    )
}

ProjectItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ProjectItem
