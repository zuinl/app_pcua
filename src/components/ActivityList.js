import React from 'react'
import { FlatList, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'

import commonStyle from '../commonStyles'

import SportActivity from './SportActivity'

export default props => {
    return(
    <View style={styles.container}>
        <View style={styles.resultsContainer}>

            {props.isLoading ? <ActivityIndicator size="large" color="#FFFFFF" /> : null }

            {props.activities && props.activities.length > 0 ?
            <FlatList
             style={styles.flatlist}
             data={props.activities}
             keyExtractor={item => item.id.toString()}
             renderItem={({item}) => 
                <SportActivity {...item} /> } 
            />
             : 
             <View style={styles.messageContainer}>
                 <Text style={styles.messageText}>Não há resultados para exibir por enquanto</Text>
             </View>
             }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.67,
        padding: 10,
        marginLeft: 5,
        marginRight: 5
    },
    resultsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: commonStyle.colors.primary
    },
    flatlist: {
        width: '100%'
    },
    messageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageText: {
        fontSize: 15,
        color: '#FFFFFF'
    }
})