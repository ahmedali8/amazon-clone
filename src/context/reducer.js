export const initialState = {
    basket: [],
}

export const reducer = (state, action) => {

    console.log(state)
    console.log(action)
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default: 
            return state;    
    }

}