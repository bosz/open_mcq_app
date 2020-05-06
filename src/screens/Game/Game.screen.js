import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './Game.styles'
import QuestionData from '../../../res/data'
import { Answer, Button } from '../../components'

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    changeQuestion = () => {
        this.setState(prev => {
            return {
                count: prev.count + 1
            }
        })
    }

    // componentDidMount = () => {
    //     setInterval(this.changeQuestion, 3000)
    // }

    render() {
        const { count } = this.state

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={styles.mainView1}>
                    <View style={styles.topView}>
                        <View style={styles.topView1}>
                            <View style={styles.pinkAndIconView}>
                                <AntDesign name='arrowleft' size={20} color='#fff' />
                            </View>
                        </View>
                        <View style={styles.topView2}>
                            <View style={styles.textView}>
                                <Text style={styles.topText}>ANGULAR JS</Text>
                                <Text style={styles.bottomText}>WORLD QUIZ</Text>
                            </View>
                            <View style={styles.iconView}>
                                <MaterialCommunityIcons name='amazon' size={20} color='#fff' />
                            </View>
                        </View>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator = {false} horizontal>
                        {QuestionData.map(item => (
                            <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                                <Text>{item.id}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.mainView2}>
                    <View style={styles.answersView}>
                        <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                            <View style={styles.questionTextView}>
                                <Text style={styles.questionText}>{QuestionData[count].questionText}</Text>
                            </View>
                            {QuestionData[count].answers.map((item, index) => (

                                <Answer key={index} optionLetter={item.letter} optionAnswer={item.answer} />
                            ))}
                        </ScrollView>
                        <View style={styles.colorChangingBar}>
                            <View style={styles.changingForward} />
                            <View style={styles.changingBackward} />
                        </View>
                        <Button
                            buttonText='Answer it'
                            onPress={this.changeQuestion}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Game
