import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'native-base';
import { Text, View } from 'react-native';

import { COLORS } from 'utils';
import { loadingStyles } from 'styles';

const Loading = () => (
  <View style={loadingStyles.container}>
    <Spinner color={COLORS.SECONDARY} />
    <Text style={loadingStyles.text}>React Native Cards is Loading...</Text>
  </View>
);

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
