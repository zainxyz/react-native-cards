import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const cardStyles = StyleSheet.create({
  card: {
    alignItems     : 'flex-start',
    backgroundColor: COLORS.WHITE,
    flex           : 1,
    justifyContent : 'center',
    marginBottom   : 2,
    padding        : 25,
    paddingBottom  : 40,
    paddingTop     : 40
  },
  title: {
    color       : COLORS.DARK,
    fontSize    : 20,
    marginBottom: 2
  },
  subTitle: {
    color       : COLORS.DARK,
    fontSize    : 20,
    fontWeight  : 'bold',
    marginBottom: 10
  },
  button: {
    backgroundColor: COLORS.PRIMARY
  },
  buttonText: {
    color: COLORS.WHITE
  },
  noCardsTitle: {
    margin   : 20,
    fontSize : 24,
    textAlign: 'center'
  },
  deleteButton: {
    alignSelf    : 'flex-end',
    flexDirection: 'row',
    alignItems   : 'center'
  }
});
