import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _shuffle from 'lodash/shuffle';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Title, View } from 'native-base';
import { createStructuredSelector } from 'reselect';

import { selectors as decksSelectors } from 'modules/decks';
import { quizStyles } from 'styles';

class Quiz extends Component {
  state = {
    cards     : [],
    counter   : 1,
    correct   : 0,
    showAnswer: false
  };

  componentWillMount() {
    const { cards } = this.props;
    const shuffledCards = _shuffle(cards);

    this.setState(() => ({ cards: shuffledCards }));
  }

  correct = value => {
    this.setState(prevState => ({
      counter   : prevState.counter + 1,
      correct   : value ? prevState.correct + 1 : prevState.correct,
      showAnswer: false
    }));
  };

  resetQuiz = () => {
    this.setState(() => ({
      counter   : 1,
      correct   : 0,
      showAnswer: false
    }));
  };

  renderQuestions = () => {
    const { cards, counter, showAnswer } = this.state;
    const current = cards[counter - 1];

    return (
      <View>
        <Text>{`${counter} of ${cards.length}`}</Text>
        <Text>{showAnswer ? current.answer : current.question}</Text>
        <TouchableOpacity onPress={() => this.setState(() => ({ showAnswer: !showAnswer }))}>
          <Text>{showAnswer ? 'Question' : 'Answer'}</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={() => this.correct(true)}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.correct(false)}>
            <Text>InCorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderScore = () => {
    const { cards, correct } = this.state;
    const { navigation } = this.props;

    return (
      <View>
        <Text>You have finished the Quiz!</Text>
        <Text>
          Score: {correct} out of {cards.length}
        </Text>
        <TouchableOpacity onPress={() => this.resetQuiz()}>
          <Text>Re-take Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { cards, counter } = this.state;
    const { deck } = this.props;

    return (
      <Container>
        <Content>
          <Title style={[quizStyles.title, { marginTop: 20 }]}>Taking Quiz for deck:</Title>
          <Text style={quizStyles.title}>{deck.title}</Text>
          {counter > cards.length ? this.renderScore() : this.renderQuestions()}
        </Content>
      </Container>
    );
  }
}

Quiz.propTypes = {
  cards: PropTypes.array,
  deck : PropTypes.object
};

Quiz.defaultProps = {
  cards: [],
  deck : {}
};

export default connect(
  createStructuredSelector({
    deck : decksSelectors.getDeckByRouteParams,
    cards: decksSelectors.getAllCardsForDeckByRouteParams
  })
)(Quiz);
