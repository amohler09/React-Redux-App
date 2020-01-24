export const initialState = {
    isLoading: null,
    activity: {},
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING_KANYEISM_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCHING_DATA_SUCCESS':
            return {
                ...state,
                isLoading: false,
                activity: action.payload
            };
        default:
        return state;
    }
}