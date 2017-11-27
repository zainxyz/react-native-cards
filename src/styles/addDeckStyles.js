import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const addDeckStyles = StyleSheet.create({
  container: {
    flex          : 1,
    justifyContent: 'center',
    alignItems    : 'center'
  },
  title: {
    color     : COLORS.DARK,
    fontSize  : 30,
    fontWeight: 'bold',
    padding   : 20,
    textAlign : 'center'
  },
  subTitle: {
    color   : COLORS.DARK,
    fontSize: 18
  },
  button: {
    flex           : 1,
    backgroundColor: COLORS.PRIMARY
  },
  buttonText: {
    color   : COLORS.WHITE,
    fontSize: 20
  }
});
