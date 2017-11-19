import faker from 'faker';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Container, Content, Text, View } from 'native-base';

import PageHeader from 'components/PageHeader';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';
import { actions as cardsActions, selectors as cardsSelectors } from 'modules/cards';
import { generateID } from 'utils';

class ViewDeck extends Component {
  componentDidMount() {}

  addRandomCard = () => {
    const randomId = generateID();
    const { deck } = this.props;

    this.props.addCard({
      id      : randomId,
      question: faker.lorem.paragraph(),
      answer  : faker.lorem.words()
    });

    this.props.editDeck({
      id   : deck.id,
      cards: [randomId]
    });
  };

  render() {
    const { getAllCardsForDeckFromParams, navigation, deck } = this.props;

    return (
      <Container>
        <PageHeader
          navigateTo={() => navigation.goBack()}
          title="Edit Deck"
          subtitle={deck.title}
          type="menu"
          icon="ios-arrow-back"
        />
        <Content>
          <View>
            <Text>{JSON.stringify(deck.cards)}</Text>
            <View style={styles.spacer} />
            <Text>{JSON.stringify(getAllCardsForDeckFromParams)}</Text>
          </View>
          <Button onPress={this.addRandomCard}>
            <Text>Add New Card to Deck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    marginTop   : 10,
    marginBottom: 10
  }
});

export default connect(
  createStructuredSelector({
    deck                        : decksSelectors.getDeckByRouteParams,
    cards                       : cardsSelectors.getAllCards,
    getAllCardsForDeckFromParams: cardsSelectors.getAllCardsForDeckFromParams
  }),
  {
    addCard : cardsActions.addCard,
    editDeck: decksActions.editDeck
  }
)(ViewDeck);
