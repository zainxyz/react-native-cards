import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CardsList from 'components/CardsList';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';
import { getHighestQuizScore } from 'utils';
import { viewDeckStyles } from 'styles';

class ViewDeck extends Component {
  addCard = () => this.props.navigation.navigate('AddCard', { deck: { id: this.props.deck.id } });

  startQuiz = () => this.props.navigation.navigate('Quiz', { deck: { id: this.props.deck.id } });

  deleteDeck = () => {
    const { deck, deleteDeck, navigation } = this.props;

    deleteDeck(deck.id);
    navigation.goBack();
  };

  deleteCard = item => {
    const { deck, deleteCardFromDeck } = this.props;

    deleteCardFromDeck(deck.id, item.id);
  };

  deleteDeckConfirm = () =>
    Alert.alert(
      'Delete Deck?',
      `Are you sure you would like to delete this deck: ${this.props.deck.title}?`,
      [
        {
          text   : 'Cancel',
          onPress: () => {},
          style  : 'cancel'
        },
        {
          text   : 'Delete',
          onPress: () => this.deleteDeck()
        }
      ],
      {
        cancelable: true
      }
    );

  deleteCardConfirm = item =>
    Alert.alert(
      'Delete Card?',
      `Are you sure you would like to delete this card: ${item.question}`,
      [
        {
          text   : 'Cancel',
          onPress: () => {},
          style  : 'cancel'
        },
        {
          text   : 'Delete Card',
          onPress: () => this.deleteCard(item)
        }
      ],
      {
        cancelable: true
      }
    );

  render() {
    const { deck } = this.props;
    const { cards } = deck;

    if (_isEmpty(deck)) {
      return <View />;
    }

    return (
      <Container>
        <Content>
          <View style={viewDeckStyles.container}>
            <Text style={viewDeckStyles.title}>{deck.title}</Text>
            <Text style={viewDeckStyles.subTitle}>Total Cards: {deck.cardsCount}</Text>
            <Text style={viewDeckStyles.subTitle}>
              Highest Quiz Score: {getHighestQuizScore(deck.quizScores)}
            </Text>
          </View>
          <View style={viewDeckStyles.container}>
            <View style={viewDeckStyles.buttonContainer}>
              <TouchableOpacity
                style={[viewDeckStyles.button, viewDeckStyles.addButton]}
                onPress={this.addCard}
              >
                <Text style={viewDeckStyles.buttonText}>Add A Card</Text>
              </TouchableOpacity>
            </View>
            {cards.length > 0 && (
              <View style={viewDeckStyles.buttonContainer}>
                <TouchableOpacity
                  style={[viewDeckStyles.button, viewDeckStyles.quizButton]}
                  onPress={this.startQuiz}
                >
                  <Text style={viewDeckStyles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={viewDeckStyles.buttonContainer}>
              <TouchableOpacity
                style={[viewDeckStyles.button, viewDeckStyles.deleteButton]}
                onPress={this.deleteDeckConfirm}
              >
                <Text style={viewDeckStyles.buttonText}>Delete Deck</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <CardsList cards={cards} deleteCardConfirm={this.deleteCardConfirm} />
          </View>
        </Content>
      </Container>
    );
  }
}

ViewDeck.propTypes = {
  deck              : PropTypes.object,
  deleteCardFromDeck: PropTypes.func.isRequired,
  deleteDeck        : PropTypes.func.isRequired,
  navigation        : PropTypes.object.isRequired
};

ViewDeck.defaultProps = {
  deck: {}
};

export default connect(
  createStructuredSelector({
    deck: decksSelectors.getDeckByRouteParams
  }),
  {
    deleteDeck        : decksActions.deleteDeck,
    deleteCardFromDeck: decksActions.deleteCardFromDeck
  }
)(ViewDeck);
