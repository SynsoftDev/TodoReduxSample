/**Created By Synsoft*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from './app/reducers';
import Lists from './app/components/lists';
import Everything from './app/components/everything';
import GroceryList from './app/components/groceryList';
import TodoList from './app/components/todoList';

//class for bottom tabs
class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

/// flux router screnes and action on all tabs
const Scenes = Actions.create(
    <Scene key='root'>
        <Scene key='lists' tabs={true} hideNavBar type={ActionConst.REPLACE}>
            <Scene key='tab1' title='Add Item' component={Lists} icon={TabIcon}></Scene>
              <Scene key='tab3' title='TODO' component={TodoList} icon={TabIcon}></Scene>
              <Scene key='tab2' title='Grocery' component={GroceryList} icon={TabIcon}></Scene>
        </Scene>
        <Scene key='everything' component={Everything} hideNavBar type={ActionConst.REPLACE}></Scene>
    </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

export default class TodoSample extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TodoReduxSample', () => TodoSample);
