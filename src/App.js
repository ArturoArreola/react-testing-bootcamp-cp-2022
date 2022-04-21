import React, {useState} from 'react';
import { DateInput } from "./components/DateInput";
import {PicInfo} from "./components/PicInfo";
import {formatDate} from "./helpers/formatDate";

export const App = ({defaultDate = new Date().toISOString().slice(0, 10)}) => {

    let [picDate, setPicDate] = useState(defaultDate);

    if(picDate instanceof Date) {
        picDate = formatDate(picDate);
    }

    return (
        <div className='main-div'>
            <span className='title'>NASA - PICTURE OF THE DAY</span>
            <hr/>
            <br/>
            <DateInput setPicDate = {setPicDate} />
            <br/>
            <br/>
            <PicInfo picDate={picDate} />
            <br/>
            <hr/>
            <span className='footer'>Project created during Wizeline Academy React Testing Bootcamp</span>
        </div>
    );
}
