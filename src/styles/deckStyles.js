import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const deckStyles = StyleSheet.create({
  card: {
    alignItems     : 'center',
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
    fontSize    : 30,
    fontWeight  : 'bold',
    marginBottom: 10,
    textAlign   : 'center'
  },
  subTitle: {
    color   : COLORS.DARK,
    fontSize: 18
  },
  button: {
    backgroundColor: COLORS.PRIMARY
  },
  buttonText: {
    color: COLORS.WHITE
  }
});
