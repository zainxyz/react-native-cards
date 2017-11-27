import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import React, { Component } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { Container, Content, Title } from 'native-base';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spacer from 'components/Spacer';
import { COLORS, getHighestQuizScore } from 'utils';
import { deckStyles, homeStyles } from 'styles';
import { selectors as decksSelectors } from 'modules/decks';

class Home extends Component {
  _navigateToDeck = deck =>
    this.props.navigation.navigate('ViewDeck', {
      deck: {
        id   : deck.id,
        title: deck.title
      }
    });

  _renderItem = ({ item }) => {
    const { title, cardsCount, quizScores } = item;

    return (
      <TouchableOpacity onPress={() => this._navigateToDeck(item)}>
        <View style={deckStyles.card}>
          <Title style={deckStyles.title}>{title}</Title>
          <Text style={deckStyles.subTitle}>Total Cards: {cardsCount}</Text>
          <Text style={deckStyles.subTitle}>
            Highest Quiz Score: {getHighestQuizScore(quizScores)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item, idx) => item.id;

  renderDecks = () => {
    const { decks } = this.props;

    if (!_isEmpty(decks)) {
      return (
        <FlatList data={decks} renderItem={this._renderItem} keyExtractor={this._keyExtractor} />
      );
    }

    return (
      <View>
        <Text style={homeStyles.noDecksTitle}>
          Sorry, but you do not have any decks available{' '}
          <Entypo name="emoji-sad" size={25} color={COLORS.SECONDARY} />
        </Text>
        <Spacer space={20} />
        <Text style={homeStyles.noDecksTitle}>
          Please click on the 'Add A Deck' button below to add your very first deck
        </Text>
        <Text style={homeStyles.noDecksTitle}>
          <Entypo name="arrow-long-down" size={50} color={COLORS.PRIMARY} />
        </Text>
      </View>
    );
  };

  render() {
    const { decks } = this.props;

    return (
      <Container>
        <Content style={homeStyles.container}>
          <Title style={homeStyles.title}>Total # of Decks: {decks.length}</Title>
          {this.renderDecks()}
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  decks     : PropTypes.array,
  navigation: PropTypes.object.isRequired
};

Home.defaultProps = {
  decks: []
};

export default connect(
  createStructuredSelector({
    decks: decksSelectors.getAllDecks
  })
)(Home);
