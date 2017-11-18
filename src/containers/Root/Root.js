import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'native-base';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DrawerNavigator } from 'react-navigation';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from 'containers/Home/Home';
import ViewDeck from 'containers/ViewDeck/ViewDeck';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';

const AppNavigator = DrawerNavigator(
  {
    Home: {
      screen: Home
    },
    ViewDeck: {
      screen: ViewDeck
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

class Root extends Component {
  loading = () => <Text>Loading...</Text>;

  render() {
    const { persistor, store } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={this.loading()} persistor={persistor}>
          <Container>
            <AppNavigator />
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center'
  },
  spacer: {
    marginTop   : 10,
    marginBottom: 10
  }
});

Root.propTypes = {
  addDeck   : PropTypes.func.isRequired,
  decks     : PropTypes.array,
  deleteDeck: PropTypes.func.isRequired,
  editDeck  : PropTypes.func.isRequired,
  persistor : PropTypes.object.isRequired,
  store     : PropTypes.object.isRequired
};

Root.defaultProps = {
  decks: []
};

export default connect(
  createStructuredSelector({
    decks: decksSelectors.getAllDecks
  }),
  {
    addDeck   : decksActions.addDeck,
    deleteDeck: decksActions.deleteDeck,
    editDeck  : decksActions.editDeck
  }
)(Root);
