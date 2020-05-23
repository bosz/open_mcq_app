import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 102, 153,0.1)'
    },
    mainView1: {
        width: '100%',
        height: '20%',
        backgroundColor: '#fff',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    topView: {
        width: '100%',
        height: 80,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    topView1: {
        height: '100%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    pinkAndIconView: {
        width: 80,
        height: 50,
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: theme.PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    topView2: {
        height: '100%',
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '19%'
    },
    iconView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.DARK_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        color: theme.DARK_COLOR,
        fontWeight: 'bold',
        marginBottom: 4
    },
    bottomText: {
        color: theme.PRIMARY_COLOR,
        fontSize: 12
    },
    mainView2: {
        paddingTop: 20,
        width: '100%',
        height: '80%',
        alignItems: 'center'
    },
    questionTextView: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10
    },
    questionText: {
        color: theme.BLACK_COLOR,
        fontWeight: 'bold',
        fontSize: 20,
    },
    questionsView: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 30,
        flex: 1
    },
    answersView: {
        flex: 1,
        width: '100%',  
        paddingBottom: 10,
        alignItems: 'center'
},
    colorChangingBar: {
        width: '95%',
        height: 7,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: theme.WHITE_COLOR,
        marginTop: 50
    },
    changingForward: {
        flex: 1,
        height: '100%',
        borderRadius: 5,
        backgroundColor: theme.PRIMARY_COLOR,

    },
    changingBackward: {
        flex: 1,
        height: '100%',
        borderRadius: 5,
        backgroundColor: theme.WHITE_COLOR
    },
    animationView: {
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: theme.SECONDARY_COLOR,
    }   
});

export default styles