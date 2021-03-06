import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView, Animated, Dimensions, Easing } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './Game.styles'
import QuestionData from '../../../res/data'
import { Answer, Button } from '../../components'

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            animatedHeight: new Animated.Value(0)
        }
    }

    changeQuestion = () => {
        this.setState(prev => {
            return {
                count: prev.count + 1
            }
        })
    }

    dropDownBackground = () => {
        Animated.timing(
            this.state.animatedHeight,
            {
                toValue: Dimensions.get('window').height,
                duration: 8000,
                asing: Easing.linear,
                useNativeDriver: false
            }
        ).start(()=>{
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: 0,
                    asing: Easing.linear,
                    useNativeDriver: false
                }
            ).start(()=>{
                this.dropDownBackground()
            })
        })
    }

    componentDidMount = () => {
        this.dropDownBackground()
    }

    render() {
        const { count, animatedHeight } = this.state

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
                                <Text style={styles.topText}>OPEN MCQ</Text>
                                <Text style={styles.bottomText}>WORLD QUIZ</Text>
                            </View>
                            <View style={styles.iconView}>
                                <MaterialCommunityIcons name='amazon' size={20} color='#fff' />
                            </View>
                        </View>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        {QuestionData.map(item => (
                            <View style={{ marginHorizontal: 30, marginTop: 20 }}>
                                <Text key={item.id} >{item.id}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.mainView2}>
                    <Animated.View style={[styles.animationView, { height: animatedHeight }]} />
                    <View style={styles.answersView}>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                            <View style={styles.questionTextView}>
                                <Text style={styles.questionText}>{QuestionData[count].questionText}</Text>
                            </View>
                            {QuestionData[count].answers.map((item, index) => (

                                <Answer key= {item.id} optionLetter={item.letter} optionAnswer={item.answer} />
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
