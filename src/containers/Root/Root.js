import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from 'components/Button';
import { generateKey } from 'utils';
import { actions as cardsActions } from 'modules/cards';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';

class Root extends Component {
  componentWillMount() {
    this.props.addDeck({ title: 'Wazzzzuppp JS!?' });
    this.props.addDeck({ title: 'React Redux' });
  }

  editSomeDeck = () => {
    this.props.editDeck({
      id   : this.props.decks[0].id,
      title: 'Nope Changed title!!!'
    });
  };

  addSomeCardsToSomeDeck = () => {
    this.props.editDeck({
      id   : this.props.decks[1].id,
      cards: ['card_1', 'card_4', 'card_6']
    });
  };

  renderDecks = () =>
    this.props.decks.map(deck => (
      <View key={generateKey()}>
        <Text>{JSON.stringify(deck)}</Text>
      </View>
    ));

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
          <View style={styles.spacer} />
          {this.renderDecks()}
          <View style={styles.spacer} />
          <Button onPress={this.editSomeDeck} text="Edit Some Deck" />
          <View style={styles.spacer} />
          <Button onPress={this.addSomeCardsToSomeDeck} text="Add Some Card IDs to Some Deck" />
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
  },
  spacer: {
    marginTop   : 20,
    marginBottom: 20
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default connect(
  createStructuredSelector({
    decks: decksSelectors.getAllDecks
  }),
  {
    fetchAllCards: cardsActions.fetchAllCards,
    addDeck      : decksActions.addDeck,
    editDeck     : decksActions.editDeck
  }
)(Root);
