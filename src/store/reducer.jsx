export const initialState = {
    users: [],
};

export const actionTypes = {
    SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default reducer;
