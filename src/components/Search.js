import React from 'react'
import {
    View,
    Dimensions,
    TextInput,
    StyleSheet
} from 'react-native'

import commonStyle from '../commonStyles'

export default props => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
             value={props.value}
             placeholder={props.placeholder}
             onChangeText={value => props.onChange(value)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        padding: 15,
        borderRadius: 25,
        backgroundColor: commonStyle.colors.secondary,
        color: '#FFFFFF'
    }
})