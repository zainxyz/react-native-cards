import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const viewDeckStyles = StyleSheet.create({
  container: {
    flex          : 1,
    justifyContent: 'center',
    alignItems    : 'center'
  },
  title: {
    color     : COLORS.PRIMARY,
    fontSize  : 50,
    fontWeight: 'bold',
    padding   : 20,
    textAlign : 'center'
  },
  subTitle: {
    color    : COLORS.DARK,
    fontSize : 18,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 10
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
  addButton: {
    backgroundColor: COLORS.PRIMARY
  },
  quizButton: {
    backgroundColor: COLORS.SECONDARY
  },
  deleteButton: {
    backgroundColor: COLORS.DARK
  }
});
