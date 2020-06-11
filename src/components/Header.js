import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import commonStyle from '../commonStyles'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.sports = ['Futebol', 'Natação', 'Ballet', 'Hidroginástica', 'Atletismo', 'Karatê', 'Taekwondo', 
                        'Vôlei', 'Handebol', 'Ginástica', 'Musculação', 'Parkour']
        this.state = {
            currentPosition: 0,
            currentSport: this.sports[0]
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            let position = this.state.currentPosition
            if(this.state.currentPosition === this.sports.length - 1) position = 0
            else position++
            this.setState({ currentPosition: position, currentSport: this.sports[position] })
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Quer</Text>
                    <Text style={styles.sportTitle}>{this.state.currentSport}?</Text>
                <Text style={styles.text}>Tem!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.15,
        padding: 15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: commonStyle.colors.secondary,
        fontSize: 27,
        fontWeight: '700'
    },
    sportTitle: {
        color: commonStyle.colors.primary,
        fontSize: 27
    }
})