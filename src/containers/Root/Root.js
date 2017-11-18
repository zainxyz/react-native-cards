import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _sample from 'lodash/sample';
import faker from 'faker';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from 'components/Button';
import { generateKey } from 'utils';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';

class Root extends Component {
  editSomeDeck = () => {
    const id = _sample(this.props.decks).id;

    this.props.editDeck({
      id,
      title: faker.lorem.words()
    });
  };

  addSomeCardsToSomeDeck = () => {
    const id = _sample(this.props.decks).id;

    this.props.editDeck({
      id,
      cards: [faker.lorem.word()]
    });
  };

  addNewDeck = () => {
    this.props.addDeck({
      title: 'NOOOOOO',
      cards: ['card_6', 'card_44', 'card_12', 'card_83', 'card_1']
    });
  };

  removeLastDeck = () => {
    this.props.deleteDeck(this.props.decks[this.props.decks.length - 1].id);
  };

  loading = () => <Text>Loading...</Text>;

  renderDecks = () =>
    this.props.decks.map(deck => (
      <View key={generateKey()}>
        <Text>{JSON.stringify(deck)}</Text>
        <View style={styles.spacer} />
      </View>
    ));

  render() {
    const { persistor, store } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={this.loading()} persistor={persistor}>
          <View style={styles.container}>
            <Text>Generated Key : {generateKey()}</Text>
            <Text>Process : {JSON.stringify(process.env)}</Text>
            <View style={styles.spacer} />
            {this.renderDecks()}
            <View style={styles.spacer} />
            <Button onPress={this.editSomeDeck} text="Edit Some Deck" />
            <View style={styles.spacer} />
            <Button onPress={this.addSomeCardsToSomeDeck} text="Add Some Card IDs to Some Deck" />
            <View style={styles.spacer} />
            <Button onPress={this.addNewDeck} text="Add A New Deck" />
            <View style={styles.spacer} />
            <Button onPress={this.removeLastDeck} text="Remove Last Deck" />
          </View>
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
