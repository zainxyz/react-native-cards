import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _shuffle from 'lodash/shuffle';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Container, Content, Title } from 'native-base';
import { createStructuredSelector } from 'reselect';

import QuizQuestions from 'components/QuizQuestions';
import QuizScore from 'components/QuizScore';
import { actions as decksActions, selectors as decksSelectors } from 'modules/decks';
import { quizStyles } from 'styles';

class Quiz extends Component {
  state = {
    cards     : [],
    correct   : 0,
    counter   : 1,
    showAnswer: false
  };

  componentWillMount() {
    const { deck } = this.props;
    const { cards } = deck;

    this.setState(() => ({ cards: this._shuffleCards(cards) }));
  }

  _shuffleCards = cards => _shuffle(cards);

  correct = value => {
    this.setState(prevState => ({
      counter   : prevState.counter + 1,
      correct   : value ? prevState.correct + 1 : prevState.correct,
      showAnswer: false
    }));
  };

  resetQuiz = () => {
    this.setState(prevState => ({
      cards     : this._shuffleCards(prevState.cards),
      correct   : 0,
      counter   : 1,
      showAnswer: false
    }));
  };

  revealAnswer = ({ showAnswer }) => this.setState(() => ({ showAnswer }));

  updateQuizScores = score => this.props.updateQuizScores({ id: this.props.deck.id, score });

  renderQuestions = () => {
    const { deck } = this.props;
    const { cards, counter, showAnswer } = this.state;
    const current = cards[counter - 1];

    return (
      <QuizQuestions
        answer={current.answer}
        counter={counter}
        onCorrect={this.correct}
        question={current.question}
        revealAnswer={this.revealAnswer}
        showAnswer={showAnswer}
        totalCards={deck.cardsCount}
      />
    );
  };

  renderScore = () => {
    const { correct } = this.state;
    const { deck, navigation } = this.props;

    return (
      <QuizScore
        correct={correct}
        totalCards={deck.cardsCount}
        navigation={navigation}
        resetQuiz={this.resetQuiz}
        updateQuizScores={this.updateQuizScores}
      />
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
  deck            : PropTypes.object,
  navigation      : PropTypes.object.isRequired,
  updateQuizScores: PropTypes.func.isRequired
};

Quiz.defaultProps = {
  deck: {}
};

export default connect(
  createStructuredSelector({
    deck: decksSelectors.getDeckByRouteParams
  }),
  {
    updateQuizScores: decksActions.updateQuizScores
  }
)(Quiz);
