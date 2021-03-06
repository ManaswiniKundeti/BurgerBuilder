import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders : [],
    loading : false,
    purchased : false
};

//we can slim the switch case by, adding another method to store the body of the PURCHASE_INIT for ex.
const purchaseInit = (state,action) => {
    return updateObject(state,{purchased : false}); //using utility func-updateObject
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.PURCHASE_INIT : return purchaseInit(state,action);
      case actionTypes.PURCHASE_BURGER_START :
          return updateObject(state,{loading : true});
      case actionTypes.PURCHASE_BURGER_SUCCESS :
        const newOrder = updateObject(action.orderData,{id : action.orderId});
          return updateObject(state,{
            loading : false,
            purchased : true,
            orders :  state.orders.concat(newOrder)
          });
      case actionTypes.PURCHASE_BURGER_FAIL :
          return updateObject(state,{loading : false});
      case actionTypes.FETCH_ORDERS_START :
          return updateObject(state,{loading : true});
      case actionTypes.FETCH_ORDERS_SUCCESS :
          return updateObject(state,{
            orders : action.orders,
            loading : false
          });
      case actionTypes.FETCH_ORDERS_FAIL :
          return updateObject(state,{loading : false});
      default :
          return state;
    }
};

export default reducer;
