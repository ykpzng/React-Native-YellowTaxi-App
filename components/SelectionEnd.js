import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from 'react-native-picker-dropdown';
import { days } from './dates';

export default class SelectionEnd extends Component {
  constructor(props) {
    super(props);
    this.state = { day: null }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(day) {
    this.setState({ day })
    this.props.handleEndDate(day);
  }

  render() {
    // console.log(this.state)

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.day}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
          style={styles.picker}
        >
          <Picker.Item label="Choose End Date" />
          {days.map((item, index) => (
            <Picker.Item label={item.date} value={item.day} key={index} />
          ))}
        </Picker>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4
  },

  picker: {
    // alignSelf: 'stretch',
    backgroundColor: 'gray',
    paddingHorizontal: 5,
    paddingVertical: 5,
    margin: 1,
    borderRadius: 5,
  },
  pickerText: {
    color: 'white',
    fontSize: 30,
  }
})