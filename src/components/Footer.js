import React from 'react'
import { 
    View, 
    StyleSheet, 
    Image, 
    Dimensions, 
    Alert,
    TouchableHighlight, 
    Text } 
from 'react-native'

import Logo from '../../assets/logo-prefeitura-de-taubate.png'

import commonStyle from '../commonStyles'

export default props => {
    const about = "Este aplicativo foi desenvolvido e cedido por Leonardo Zuin, Analista e Desenvolvedor de Sistemas. Conheça o desenvolvedor em: linkedin.com/in/lzuin\nO Programa Comum-Unidade em Ação é de autoria e responsabilidade da Prefeitura Municipal de Taubaté, através da Secretaria de Esportes e Lazer. Mais informações: (12) 3624-8740"
    return (
        <View style={styles.container}>
            <TouchableHighlight 
             style={styles.aboutButton}
             underlayColor={commonStyle.colors.primary}
             activeOpacity={0.7}
             onPress={() => Alert.alert('Sobre este aplicativo', about)} >
                <Text style={styles.buttonText}>Sobre este app</Text>
            </TouchableHighlight>
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
    },
    aboutButton: {
        margin: 10,
        padding: 10,
        backgroundColor: commonStyle.colors.primary,
        borderRadius: 20
    },
    buttonText: {
        color: '#FFFFFF'
    }
})