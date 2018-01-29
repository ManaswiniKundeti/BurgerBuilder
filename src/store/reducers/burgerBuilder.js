import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients : null,
  totalPrice : 5,
  error : false
};

const INGREDIENT_PRICES = {
  salad : 0.5,
  blackbeans : 1.2,
  cheese : 0.3,
  tofu : 1.5,
  brownrice : 0.8
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS:
                return {
                    ...state,
                    ingredients : {
                      salad : action.ingredients.salad,
                      blackbeans : action.ingredients.blackbeans,
                      cheese : action.ingredients.cheese,
                      tofu : action.ingredients.tofu,
                      brownrice : action.ingredients.brownrice
                    },
                    error : false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
                return {
                    ...state,
                    error : true
            };
        default:
            return state;
    }
};

export default reducer;
