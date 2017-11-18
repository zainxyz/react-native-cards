import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container } from 'native-base';

import PageHeader from 'components/PageHeader';
import { selectors as decksSelectors } from 'modules/decks';

class ViewDeck extends Component {
  render() {
    return (
      <Container>
        <PageHeader
          navigateTo={() => this.props.navigation.navigate('Home')}
          title="Edit Deck"
          subtitle="The deck's name goe here does not go here or does it go here i dont know"
          type="menu"
          icon="ios-arrow-back"
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spacer: {
    marginTop   : 10,
    marginBottom: 10
  }
});

export default connect(
  createStructuredSelector({
    decks: decksSelectors.getAllDecks
  })
)(ViewDeck);
