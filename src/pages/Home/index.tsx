import React, { useState } from 'react'
import { View, ImageBackground, Image, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackground source={require('../../../assets/canivete.png')} style={styles.container} imageStyle={{ width: 430, height: 368 }}>
                <View style={styles.main}>
                    <View>
                        <Text style={styles.title}>
                            Canivete Perneta
                        </Text>
                        <Text style={styles.description}>
                            O amigo do caminhoneiro a bordo de suas viagens.
                        </Text>
                    </View>
                </View>
                <View>
                    <RectButton style={styles.button}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#fff" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            ACESSAR
                        </Text>
                    </RectButton>
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
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
        textShadowColor:'#878787',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:1,
        textAlign: 'left',
        fontSize: 64,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 100
    },

    description: {
        color: '#6C6C80',
        textShadowColor:'#878787',
        fontSize: 24,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    image: {
        width: 30,
        height: 30
    },

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
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

export default Home;