import { ADD_ORDER } from "../actions"

// const defaultState = {
//     order: [],
//     totalPrice: 0,
//     totalCount: 0,
// }

export const rootReducer = (state, actions) => {
    switch (actions.type) {
        case ADD_ORDER:
            return {
                ...state,
                order: [
                    ...state.order,
                    {
                        title: actions.payload.title,
                        price: actions.payload.price,
                    }
                ]
            }
        default:
            return state
    }
}