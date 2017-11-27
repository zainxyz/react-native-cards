import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Spacer from 'components/Spacer';
import { COLORS } from 'utils';
import { quizStyles } from 'styles';

const QuizQuestions = ({
  answer,
  counter,
  onCorrect,
  question,
  revealAnswer,
  showAnswer,
  totalCards
}) => (
  <View>
    <View style={quizStyles.card}>
      <Text style={quizStyles.counter}>{`Question ${counter} of ${totalCards}`}</Text>
      <Text style={quizStyles.question}>{showAnswer ? answer : question}</Text>
      <TouchableOpacity
        style={quizStyles.button}
        onPress={() => revealAnswer({ showAnswer: !showAnswer })}
      >
        <Text style={quizStyles.buttonText}>{showAnswer ? 'Show Question' : 'Show Answer'}</Text>
      </TouchableOpacity>
    </View>
    <View style={quizStyles.container}>
      <TouchableOpacity
        style={[quizStyles.button, { backgroundColor: COLORS.GREEN }]}
        onPress={() => onCorrect(true)}
      >
        <Text style={quizStyles.buttonText}>Correct</Text>
      </TouchableOpacity>
      <Spacer space={5} />
      <TouchableOpacity
        style={[quizStyles.button, { backgroundColor: COLORS.SECONDARY }]}
        onPress={() => onCorrect(false)}
      >
        <Text style={quizStyles.buttonText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  </View>
);

QuizQuestions.propTypes = {
  answer      : PropTypes.string,
  counter     : PropTypes.number,
  onCorrect   : PropTypes.func,
  question    : PropTypes.string,
  revealAnswer: PropTypes.func,
  showAnswer  : PropTypes.bool,
  totalCards  : PropTypes.number
};

QuizQuestions.defaultProps = {
  answer      : '',
  counter     : 0,
  onCorrect   : () => {},
  question    : '',
  revealAnswer: () => {},
  showAnswer  : false,
  totalCards  : 0
};

export default QuizQuestions;
