import React from 'react' ;
//import { withRouter } from 'react-router-dom';
import classes from './Burger.css' ;
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)   //transform object of key value pairs into an array of burger ingredients
      .map(igKey => {                                              // where value of object is important to decide how many ingredients i need
        return [...Array(props.ingredients[igKey])].map((_,i) => {  // value of key is important for type of ingredient i need
            return <BurgerIngredients key = {igKey+i} type = {igKey} />;
        });
      })
      .reduce((arr,el) => {
        return arr.concat(el)
      },[]);
      if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
      }
  console.log(transformedIngredients);
  return (
    <div className ={classes.Burger}>
      <BurgerIngredients type ="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type ="bread-bottom" />
    </div>
  ) ;
};

export default burger ;
