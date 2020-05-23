import { StyleSheet } from 'react-native'

import theme from '../../theme'

const styles = StyleSheet.create({
    container: {
      width: '95%',
      height: 65,
      backgroundColor: theme.PRIMARY_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      borderRadius: 10
    },
    buttonText: {
        color: theme.WHITE_COLOR,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles