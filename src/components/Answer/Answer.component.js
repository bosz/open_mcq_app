import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Answer.styles'

class Answer extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.optionView}>
                    <Text style={styles.optionLetter}>{this.props.optionLetter}</Text>
                </View>
                <View style={styles.optionTextView}>
                    <Text style={styles.optionAnswer}>{this.props.optionAnswer}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Answer;
