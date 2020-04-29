import React, { Component } from 'react'
import { Text, View, StatusBar, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './Game.styles'
import QuestionData from '../../../res/data'
import { Answer, Button } from '../../components'

export class Game extends Component {
    render() {
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
                    <ScrollView horizontal>
                        { QuestionData.map(item=>(
                            <View style={{ marginHorizontal: 30, marginTop:20 }}>
                                <Text>{item.id}</Text>
                            </View>
                        )) }
                    </ScrollView>
                </View>
                <View style={styles.mainView2}>
                    <View style={styles.answersView}>
                        <ScrollView contentContainerStyle={{ alignItems: 'center', width: '100%' }}>
                            <View style={styles.questionTextView}>
                                <Text style={styles.questionText}>Which of the following is true about Node.js ?</Text>
                            </View>
                            <Answer optionLetter="A" optionAnswer="Node.js is a javascript framework/plartform built on Google chrome's javascript V8" />
                            <Answer optionLetter="B" optionAnswer="Node.js is a javascript framework/plartform built on Google chrome's javascript V8" />
                            <Answer optionLetter="C" optionAnswer="Node.js is a javascript framework/plartform built on Google chrome's javascript V8" />
                        </ScrollView>
                        <View style={styles.colorChangingBar}>
                            <View style={styles.changingForward} />
                            <View style={styles.changingBackward} />
                        </View>
                        <Button
                            buttonText='Answer it'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Game
