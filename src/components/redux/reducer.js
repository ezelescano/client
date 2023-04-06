import { GET_USERS } from "./actions";
const initialState = {
    users: []
};

// reducer recibe el estado que va a modificar recibe la action que va a ejecutar

const rootReducer = (state = initialState, action) => {
    switch (action.type) {//evalua la actio ntype
        case GET_USERS: 
        return {...state, users: action.payload };// retorna un estado nuevo con su modificacion 
        default:
            return { ...state };// redux no modifica el estado, redurx lo pisa
    }
};

export default rootReducer;

