import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';

import Spacer from 'components/Spacer';
import { COLORS } from 'utils';
import { cardStyles, cardsListStyles } from 'styles';

class CardsList extends Component {
  _keyExtractor = (item, idx) => item.id;

  _renderItem = ({ item }) => {
    const { answer, question } = item;
    const { deleteCardConfirm } = this.props;

    return (
      <View>
        <View style={cardStyles.card}>
          <TouchableOpacity style={cardStyles.deleteButton} onPress={() => deleteCardConfirm(item)}>
            <Feather name="x" size={30} color={COLORS.SECONDARY} />
            <Text>Delete Card</Text>
          </TouchableOpacity>
          <Text style={cardStyles.title}>Question:</Text>
          <Text style={cardStyles.subTitle}>{question}</Text>
          <Text style={cardStyles.title}>Answer:</Text>
          <Text style={cardStyles.subTitle}>{answer}</Text>
        </View>
      </View>
    );
  };

  renderCardsList = () => {
    const { cards } = this.props;

    if (!_isEmpty(cards)) {
      return (
        <View>
          <Text style={cardStyles.noCardsTitle}>List of all the cards in this deck</Text>
          <FlatList data={cards} renderItem={this._renderItem} keyExtractor={this._keyExtractor} />
        </View>
      );
    }

    return (
      <View>
        <Text style={cardStyles.noCardsTitle}>
          Sorry, but you have not added any cards to this deck{' '}
          <Entypo name="emoji-sad" size={25} color={COLORS.SECONDARY} />
        </Text>
        <Spacer space={20} />
        <Text style={cardStyles.noCardsTitle}>
          <Entypo name="arrow-long-up" size={50} color={COLORS.PRIMARY} />
        </Text>
        <Text style={cardStyles.noCardsTitle}>
          Please click on the 'Add A Card' button above to add your very first card to this deck
        </Text>
      </View>
    );
  };

  render() {
    return <View style={cardsListStyles.container}>{this.renderCardsList()}</View>;
  }
}

CardsList.propTypes = {
  cards            : PropTypes.array,
  deleteCardConfirm: PropTypes.func
};

CardsList.defaultProps = {
  cards            : [],
  deleteCardConfirm: () => {}
};

export default CardsList;
