import React from 'react';
import PropTypes from 'prop-types';

export const DateInput = (props) => {

    const { setPicDate } = props;
    console.log('inside date input ', setPicDate);

    return(
        <>
            <h2>Date Input</h2>
        </>
    );
}

DateInput.protoTypes = {
    setPicDate: PropTypes.string.isRequired
}