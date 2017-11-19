import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base';

import PageHeader from 'components/PageHeader';
import { COLORS, dateTillNow, generateKey } from 'utils';
import { selectors as decksSelectors } from 'modules/decks';

class Home extends Component {
  renderDecks = () =>
    this.props.decks.map(deck => (
      <Card transparent key={generateKey()}>
        <CardItem button>
          <Body>
            <Text>{deck.title}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>Cards: {deck.cardsCount}</Text>
          </Left>
          <Body>
            <Button
              onPress={() =>
                this.props.navigation.navigate('ViewDeck', {
                  deckId   : deck.id,
                  cardsList: deck.cards
                })
              }
            >
              <Text>View Deck</Text>
            </Button>
          </Body>
          <Right>
            <Text>{dateTillNow(deck.timestamp)}</Text>
          </Right>
        </CardItem>
      </Card>
    ));

  render() {
    return (
      <Container>
        <PageHeader navigateTo={this.props.navigation.navigate} title="Home" type="menu" />
        <Content>{this.renderDecks()}</Content>
        <Footer>
          <Body>
            <Button
              full
              large
              style={{ backgroundColor: COLORS.PRIMARY }}
              onPress={() => this.props.navigation.navigate('AddDeck')}
            >
              <Icon name="ios-add-circle" style={{ color: COLORS.WHITE }} />
              <Text>Add New Deck</Text>
            </Button>
          </Body>
        </Footer>
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
)(Home);
