import PropTypes from 'prop-types';
import React from 'react';
import { Body, Header, Left, Right, Title, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { COLORS } from 'utils';
import { pageHeaderStyles } from 'styles';

const LeftComponent = ({ onPress, icon }) => (
  <TouchableOpacity onPress={() => onPress()}>
    <View style={{ alignItems: 'center', paddingTop: 12 }}>{icon}</View>
  </TouchableOpacity>
);

LeftComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon   : PropTypes.node.isRequired
};

const PageHeader = ({ headerColor, leftComponent, subTitle, subTitleColor, title, titleColor }) => (
  <Header
    style={[pageHeaderStyles.container, { backgroundColor: headerColor }]}
    iosBarStyle="light-content"
  >
    <Left style={pageHeaderStyles.left}>
      {leftComponent && <LeftComponent onPress={leftComponent.onPress} icon={leftComponent.icon} />}
    </Left>
    <Body style={pageHeaderStyles.center}>
      {subTitle && (
        <Title style={[pageHeaderStyles.subTitle, { color: subTitleColor }]}>{subTitle}</Title>
      )}
      <Title style={[pageHeaderStyles.title, { color: titleColor }]}>{title}</Title>
    </Body>

    <Right style={pageHeaderStyles.right} />
  </Header>
);

PageHeader.propTypes = {
  headerColor  : PropTypes.string,
  leftComponent: PropTypes.object,
  subTitle     : PropTypes.string,
  subTitleColor: PropTypes.string,
  title        : PropTypes.string,
  titleColor   : PropTypes.string
};

PageHeader.defaultProps = {
  headerColor  : COLORS.DARK,
  leftComponent: {},
  subTitle     : '',
  subTitleColor: COLORS.WHITE,
  title        : '',
  titleColor   : COLORS.WHITE
};

export default PageHeader;
