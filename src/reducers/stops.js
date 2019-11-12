const stopReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_STOP':
            return [
                ...state,
                { name: action.name, address: action.address }
            ]
        case 'REMOVE_STOP':
            // return true when the stop name is not equal to the stop name provided
            return state.filter((stop) => stop.name !== action.name )
        default:
            return state
    }
}

export { stopReducer as default }