export const ADD_ORDER = "ADD_ORDER"

// export const add_oder = ()=> {
//     return{
//         type: ADD_ORDER,
//     };
// };

export const add_oder = (item) => ({
    type: ADD_ORDER,
    payload: item,
});