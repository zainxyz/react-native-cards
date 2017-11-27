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
  addButton: {
    backgroundColor: COLORS.PRIMARY
  },
  addButtonText: {
    color: COLORS.WHITE
  },
  quizButton: {
    backgroundColor: COLORS.SECONDARY
  },
  quizButtonText: {
    color: COLORS.WHITE
  }
});
