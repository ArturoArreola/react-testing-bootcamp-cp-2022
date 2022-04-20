import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

export const DateInput = (props) => {

    const [ inputValue, setInputValue ] = useState(null);
    const { setPicDate } = props;

    const handleInputChange = (newValue) => {
        setInputValue(newValue);
        setPicDate(newValue);
    }

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Choose a date..."
                value={ inputValue }
                onChange={ handleInputChange }
                minDate={new Date("1995-06-17")}
                maxDate={new Date()}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

DateInput.protoTypes = {
    setPicDate: PropTypes.string.isRequired
}