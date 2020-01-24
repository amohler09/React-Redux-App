import axios from "axios"

export const fetchKanyeism = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_KANYEISM_START' })
        axios.get('https://api.kanye.rest/')
        .then (res => {
            //res.data => activity
            dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: res.data })
        })
        .catch(err => console.log(err))
    };
};