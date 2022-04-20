import React, {useState} from 'react';
import { DateInput } from "./components/DateInput";
import {PicInfo} from "./components/PicInfo";
import {formatDate} from "./helpers/formatDate";

export const App = ({defaultDate = new Date().toISOString().slice(0, 10)}) => {

    let [picDate, setPicDate] = useState(defaultDate);
    // console.log('Value of picDate -> ', picDate);

    if(picDate instanceof Date) {
        picDate = formatDate(picDate);
    }

    return (
        <div className='main-div'>
            <span className='title'> NASA - PICTURE OF THE DAY</span>
            <hr/>
            <br/>
            <DateInput setPicDate = {setPicDate} />
            <br/>
            <PicInfo picDate={picDate} />
        </div>
    );
}
