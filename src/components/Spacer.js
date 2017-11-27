import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

const Spacer = ({ space }) => <View style={{ margin: space }} />;

Spacer.propTypes = {
  space: PropTypes.number
};

Spacer.defaultProps = {
  space: 5
};

export default Spacer;
