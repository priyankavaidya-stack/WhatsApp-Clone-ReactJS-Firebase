export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",     //This is where we actually push our data layer,by saying "GO and Push data"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            default:
                return state;
    }
};

export default reducer;