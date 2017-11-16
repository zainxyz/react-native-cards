import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';

import { generateKey } from 'utils';
import { actions as cardsActions } from 'modules/cards';

class Root extends Component {
  componentDidMount() {
    this.props.fetchAllCards();
    // console.log('App : componentDidMount : props :', this.props);
  }

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Generated Key : {generateKey()}</Text>
          <Text>Process : {JSON.stringify(process.env)}</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default connect(null, {
  fetchAllCards: cardsActions.fetchAllCards
})(Root);
