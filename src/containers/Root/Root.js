import PropTypes from 'prop-types';
import React from 'react';
import { Container, Spinner } from 'native-base';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

import AddDeck from 'containers/AddDeck/AddDeck';
import Home from 'containers/Home/Home';
import ViewDeck from 'containers/ViewDeck/ViewDeck';
import { COLORS } from 'utils';

const Drawer = DrawerNavigator(
  {
    AppHome: {
      screen: Home
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Drawer
    },
    AddDeck: {
      screen: AddDeck
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

const Root = ({ persistor, store }) => (
  <Provider store={store}>
    <PersistGate
      loading={<Spinner color={COLORS.secondary} style={styles.container} />}
      persistor={persistor}
    >
      <Container>
        <AppNavigator />
      </Container>
    </PersistGate>
  </Provider>
);

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
  persistor: PropTypes.object.isRequired,
  store    : PropTypes.object.isRequired
};

export default Root;
