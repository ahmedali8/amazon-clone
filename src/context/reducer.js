export const initialState = {
    basket: [],
    user: null
}

// Selector
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => (item.price + amount), 0);

export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET':
            // get the index of the item to be removed
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                // removes the product which has that index
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in basket!`
                );
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            
        default:
            return state;
    }

}