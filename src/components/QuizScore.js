import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Spacer from 'components/Spacer';
import { COLORS, calculateQuizScore } from 'utils';
import { quizStyles } from 'styles';

const QuizScore = ({ correct, totalCards, navigation, resetQuiz }) => (
  <View>
    <View style={quizStyles.card}>
      <Text style={quizStyles.title}>You have finished the Quiz!</Text>
      <Text style={quizStyles.subTitle}>
        Final Score: {correct} out of {totalCards} or {calculateQuizScore(correct, totalCards)}
      </Text>
    </View>
    <View style={quizStyles.container}>
      <TouchableOpacity
        style={[quizStyles.button, { backgroundColor: COLORS.PRIMARY }]}
        onPress={() => resetQuiz()}
      >
        <Text style={quizStyles.buttonText}>Re-take Quiz</Text>
      </TouchableOpacity>
      <Spacer space={5} />
      <TouchableOpacity
        style={[quizStyles.button, { backgroundColor: COLORS.DARK }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={quizStyles.buttonText}>Go Back to Deck View</Text>
      </TouchableOpacity>
    </View>
  </View>
);

QuizScore.propTypes = {
  correct   : PropTypes.number,
  navigation: PropTypes.object,
  resetQuiz : PropTypes.func,
  totalCards: PropTypes.number
};

QuizScore.defaultProps = {
  correct   : 0,
  navigation: {},
  resetQuiz : () => {},
  totalCards: 0
};

export default QuizScore;
