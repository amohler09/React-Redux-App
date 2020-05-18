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
        axios.get('https://api.gfycat.com/v1/gfycats/search?search_text=kanye')
        .then (res => {
        console.log(res.data.gfycats)
        dispatch({ type: 'KANYE_GIF', payload: res.data.gfycats})
    })
    .catch(err => console.log(err))
    };
};

