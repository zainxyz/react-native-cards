import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CardsList from 'components/CardsList';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';
import { viewDeckStyles } from 'styles';

class ViewDeck extends Component {
  componentDidMount() {}

  addCard = () => this.props.navigation.navigate('AddCard', { deck: { id: this.props.deck.id } });

  startQuiz = () => this.props.navigation.navigate('Quiz', { deck: { id: this.props.deck.id } });

  render() {
    const { cards, deck } = this.props;

    return (
      <Container>
        <Content>
          <View style={viewDeckStyles.container}>
            <Text style={viewDeckStyles.title}>{deck.title}</Text>
            <Text style={viewDeckStyles.subTitle}>Total Cards: {deck.cardsCount}</Text>
          </View>
          <View style={viewDeckStyles.container}>
            <View style={viewDeckStyles.buttonContainer}>
              <Button large style={viewDeckStyles.addButton} onPress={this.addCard}>
                <Text style={viewDeckStyles.addButtonText}>Add A Card</Text>
              </Button>
            </View>
            {cards.length > 0 && (
              <View style={viewDeckStyles.buttonContainer}>
                <Button large style={viewDeckStyles.quizButton} onPress={this.startQuiz}>
                  <Text style={viewDeckStyles.quizButtonText}>Start Quiz</Text>
                </Button>
              </View>
            )}
          </View>
          <View>
            <CardsList cards={cards} />
          </View>
        </Content>
      </Container>
    );
  }
}

ViewDeck.propTypes = {
  addCard   : PropTypes.func.isRequired,
  deck      : PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  cards     : PropTypes.array
};

ViewDeck.defaultProps = {
  cards: []
};

export default connect(
  createStructuredSelector({
    deck : decksSelectors.getDeckByRouteParams,
    cards: decksSelectors.getAllCardsForDeckByRouteParams
  }),
  {
    addCard: decksActions.addCardToDeck
  }
)(ViewDeck);
