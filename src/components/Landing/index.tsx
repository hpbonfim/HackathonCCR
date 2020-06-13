import React from 'react'
import { View, ImageBackground, StyleSheet, Text} from 'react-native'



const Landing = () => {

    return (
          <ImageBackground source={require('../../../assets/canivete.png')} style={styles.container} imageStyle={{ width: 324, height: 264 }}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    SUA FERRAMENTA DE BORDO DENTRO E FORA DAS ESTRADAS. 😷
                    </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#f0f0f5'
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#000',
        textShadowColor: '#878787',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textAlign: 'left',
        fontSize: 36,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 250
    },

    button: {
        backgroundColor: '#324552',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

export default Landing;