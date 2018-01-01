import React,{Component} from 'react' ;
import classes from './BurgerIngredients.css' ;
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {
  render () {
      let ingredient = null;

      switch (this.props.type) {
        case ('bread-bottom'):
          ingredient = <div className ={classes.BreadBottom} ></div>;
          break;
        case ('bread-top'):
          ingredient = (
            <div className = {classes.BreadTop}>
              <div className = {classes.Seeds1}></div>
              <div className = {classes.Seeds2}></div>
            </div>
          );
          break;
        case ('tofu'):
          ingredient = <div className = {classes.Tofu}></div>;
          break;
        case ('brownrice'):
          ingredient = <div className = {classes.BrownRice}></div>;
          break;
        case ('cheese'):
          ingredient = <div className = {classes.Cheese}></div>;
          break;
        case ('salad'):
          ingredient = <div className = {classes.Salad}></div>;
          break;
        case ('blackbeans'):
          ingredient = <div className = {classes.BlackBeans}></div>;
          break;
        default :
          ingredient = null;
      }
      return ingredient ;
    }
}

BurgerIngredients.propTypes = {
  type : PropTypes.string.isRequired
};

export default BurgerIngredients;
