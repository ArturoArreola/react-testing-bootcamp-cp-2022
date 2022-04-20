import React, {useState} from 'react';
import './App.css';
import {DateInput} from "./components/DateInput";

export const App = ({defaultDate = new Date().toISOString().slice(0, 10)}) => {

    const [picDate, setPicDate] = useState(defaultDate);
    console.log(picDate);

    return (
        <div className='main-div'>
            <span className='title'> NASA - PICTURE OF THE DAY</span>

            <DateInput setPicDate = {setPicDate} />
            <hr/>
        </div>
    );
}
