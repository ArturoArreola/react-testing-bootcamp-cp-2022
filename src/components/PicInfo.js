import React from 'react';
import PropTypes from 'prop-types';

export const PicInfo = ({picDate}) => {

    console.log('PIC INFO => ', picDate);

    return(
        <>
            <h2>AQUI VA LA INFO DE LA IMAGEN</h2>
        </>
    );
}

PicInfo.propTypes = {
    picDate: PropTypes.string.isRequired
}