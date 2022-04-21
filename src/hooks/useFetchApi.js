import {useEffect, useState} from 'react';
import {getApiData} from "../helpers/getApiData";

export const useFetchApi = (picDate) => {

    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect(() => {
        getApiData(picDate)
            .then(info => {
                setState({
                    data: info,
                    loading: false
                })
            })
    }, [picDate])

    return state;
}