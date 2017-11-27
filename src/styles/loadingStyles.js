import { StyleSheet } from 'react-native';

import { COLORS } from 'utils';

export const loadingStyles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: COLORS.WHITE,
    alignItems     : 'center',
    justifyContent : 'center'
  },
  text: {
    fontSize: 24,
    color   : COLORS.SECONDARY
  }
});
