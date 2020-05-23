import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
        width: '95%',
        backgroundColor: theme.WHITE_COLOR,
        borderRadius: 6,
        paddingVertical: 25,
        flexDirection: 'row',
        marginVertical:10,
    },
    optionView: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25
    },
    optionTextView: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionLetter: {
        color: theme.BLACK_COLOR,
        fontSize: 40,
        fontWeight: '800'
    },
    optionAnswer: {
        color: theme.DARK_COLOR,
        fontSize: 18,
    }
});

export default styles