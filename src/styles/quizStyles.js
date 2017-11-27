import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const quizStyles = StyleSheet.create({
  container: {
    flex      : 1,
    alignItems: 'center'
  },
  card: {
    alignItems     : 'flex-start',
    backgroundColor: COLORS.WHITE,
    flex           : 1,
    justifyContent : 'center',
    marginBottom   : 20,
    marginTop      : 20,
    padding        : 25,
    paddingBottom  : 40,
    paddingTop     : 40
  },
  question: {
    color       : COLORS.DARK,
    fontSize    : 30,
    marginBottom: 10,
    marginTop   : 10
  },
  counter: {
    color    : COLORS.DARK,
    fontSize : 14,
    alignSelf: 'flex-end'
  },
  title: {
    color       : COLORS.DARK,
    fontSize    : 20,
    marginBottom: 2,
    textAlign   : 'center'
  },
  subTitle: {
    color       : COLORS.DARK,
    fontSize    : 20,
    fontWeight  : 'bold',
    marginBottom: 10
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding        : 15,
    paddingLeft    : 20,
    paddingRight   : 20,
    width          : 150
  },
  buttonText: {
    color    : COLORS.WHITE,
    fontSize : 20,
    textAlign: 'center'
  },
  noCardsTitle: {
    margin   : 20,
    fontSize : 24,
    textAlign: 'center'
  }
});
