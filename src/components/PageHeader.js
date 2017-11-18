import PropTypes from 'prop-types';
import React from 'react';
import { Body, Header, Left, Button, Icon, Subtitle, Title, Right } from 'native-base';

import { COLORS, truncateString } from 'utils';

const PageHeader = ({ icon, navigateTo, subtitle, style, title, type }) => {
  return (
    <Header style={{ backgroundColor: COLORS.DARK }} iosBarStyle="light-content" hasSubtitle>
      <Left>
        <Button transparent onPress={() => navigateTo('DrawerOpen')}>
          <Icon name={icon} style={{ color: COLORS.WHITE }} />
        </Button>
      </Left>
      <Body>
        <Title style={{ color: COLORS.WHITE, fontSize: 24 }}>{title}</Title>
        {subtitle && (
          <Subtitle style={{ color: COLORS.WHITE }}>{truncateString(subtitle, 50)}</Subtitle>
        )}
      </Body>
      <Right />
    </Header>
  );
};

PageHeader.propTypes = {
  icon      : PropTypes.string,
  navigateTo: PropTypes.func,
  style     : PropTypes.object,
  subtitle  : PropTypes.string,
  title     : PropTypes.string,
  type      : PropTypes.string
};

PageHeader.defaultProps = {
  icon      : 'ios-menu',
  navigateTo: () => {},
  style     : {},
  subtitle  : null,
  title     : 'Header',
  type      : 'menu'
};

export default PageHeader;
