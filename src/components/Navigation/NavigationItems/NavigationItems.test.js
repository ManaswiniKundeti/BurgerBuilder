import React from 'react';

import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter : new Adapter()})

describe('<NavigationItems />' , () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<NavigationItems />);
  });

  it('should render two <NavigationItem /> elements if not authenticated' , () => {
      expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three <NavigationItem /> elements if authenticated' , () => {
      //wrapper = shallow(<NavigationItems isAuthenticated />);
      wrapper.setProps({isAuthenticated : true});
      expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should an exact logout button' , () => {
      wrapper.setProps({isAuthenticated : true});
      expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });

});


//Jest uses couple of methods to define the tests.
//describe -  arg 1 : helps identify the test result on screen , arg 2 is a function that holds the test to be run
//'it' allows you to write one individual tests
//for testing purpose Enzyme allows to render only the  <NavigationItems /> standalone,independednt of the entire other --
  //whole react appln. we dont have to render the entire React app
//Shallow func is a helper method kind of one.shallow shd be used as often as possible
//find is a utility method by enzyme that allows us to look into the wrapper and see if it contains a certain content
    // here we want to find a NavigationItem
    //we expect to find the NavigationItem 2 times so we write 'toHaveLength(2)'

    //we have 'test' scipt also in package .json file .We have start,build and test
    //run test using npm start ----- in case error, delete App.test.js file
//beforeEach func runs before each test , afterEach func runs at the end to do cleanup
