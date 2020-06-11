import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import commonStyle from '../commonStyles'

export default props => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.time}</Text>
        <Text style={styles.subtitle}>Projeto: {props.project}</Text>
        <Text style={styles.text}>Local: {props.address}</Text>
        <Text style={styles.text}>Instrutor(a): {props.instructor}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 15,
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: commonStyle.colors.tertiary
    },
    title: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    subtitle: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: '500'
    },
    text: {
        fontSize: 12,
        color: '#FFFFFF'
    }
})