import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

import Logo from '../../assets/logo-prefeitura-de-taubate.png'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height * 0.08,
        padding: 10
    },
    image: {
        width: 144,
        height: 38
    }
})