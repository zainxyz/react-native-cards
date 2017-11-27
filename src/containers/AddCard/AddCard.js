import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { Alert, Text, View } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';

import Spacer from 'components/Spacer';
import { actions as decksActions } from 'modules/decks';
import { addDeckStyles } from 'styles';

class AddCard extends Component {
  state = {
    question: '',
    answer  : ''
  };

  _updateQuestion = question => this.setState(() => ({ question }));

  _updateAnswer = answer => this.setState(() => ({ answer }));

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { addCardToDeck, navigation } = this.props;

    if (!_isEmpty(answer) && !_isEmpty(question)) {
      addCardToDeck({
        id  : navigation.state.params.deck.id,
        card: {
          question,
          answer
        }
      });
      navigation.goBack();
    } else {
      Alert.alert(
        'Question and Answer Required',
        "Please provide a valid 'question' and an 'answer' for the card."
      );
    }
  };

  render() {
    const { answer, question } = this.state;

    return (
      <Container>
        <Content>
          <Form ref={f => (this._form = f)} style={addDeckStyles.container}>
            <Text style={addDeckStyles.title}>Question & Answer</Text>
            <Item floatingLabel>
              <Label>Card Question</Label>
              <Input value={question} onChangeText={this._updateQuestion} />
            </Item>
            <Item floatingLabel last>
              <Label>Card Answer</Label>
              <Input value={answer} onChangeText={this._updateAnswer} />
            </Item>
            <Spacer space={20} />
            <View style={[addDeckStyles.container, { flexDirection: 'row' }]}>
              <Button full large style={addDeckStyles.button} onPress={this.handleSubmit}>
                <Text style={addDeckStyles.buttonText}>Add New Card to Deck</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

AddCard.propTypes = {
  addCardToDeck: PropTypes.func.isRequired,
  navigation   : PropTypes.object.isRequired
};

export default connect(null, {
  addCardToDeck: decksActions.addCardToDeck
})(AddCard);
