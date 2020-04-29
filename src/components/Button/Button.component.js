import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles'

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
