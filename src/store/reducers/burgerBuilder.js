import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  ingredients : null,
  totalPrice : 5,
  error : false,
  building : false,
  authRedirectPath : '/'
};

const INGREDIENT_PRICES = {
  salad : 0.5,
  blackbeans : 1.2,
  cheese : 0.3,
  tofu : 1.5,
  brownrice : 0.8
};

const addIngredient = (state,action) => {
  const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
  const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
  const updatedState = {
      ingredients : updatedIngredients,
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      building : true
  };
  return updateObject(state,updatedState);
};

const removeIngredient = (state,action) => {
  return {
      ...state,
      ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      },
      totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      building : true
  };
};
const setIngredients = (state,action) => {
  return {
      ...state,
      ingredients : {
        salad : action.ingredients.salad,
        blackbeans : action.ingredients.blackbeans,
        cheese : action.ingredients.cheese,
        tofu : action.ingredients.tofu,
        brownrice : action.ingredients.brownrice
      },
      totalPrice : 5,
      error : false,
      building : false
    };
};
const fetchIngredientsFailed = (state,action) => {
  return {
      ...state,
      error : true
    };
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      //used utility func for case ADD_INGREDIENT body code
        case actionTypes.ADD_INGREDIENT: return addIngredient(state,action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state,action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state,action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state,action);
        default: return state;
    }
};

export default reducer;
