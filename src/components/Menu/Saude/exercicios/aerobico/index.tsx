import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'

const aerobico = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    const state = {
        names: [
            {
                id: 0,
                name: "Pesquisas comprovam que exercícios ...",
                uri: "https://www.selecoes.com.br/wp-content/uploads/2018/09/exercicio-aerobico-760x450.jpg",
                font: "Fonte: cientistas.pesquisadores.com.br - 15 / 07 / 2020"
            },
            {
                id: 1,
                name: "Sabia que isso lhe trará vantagens no fut..",
                uri: "https://img.vixdata.io/pd/webp-large/pt/sites/default/files/bdm/field/image/exercicio-aerobico-corpo-queima-gordura.jpg",
                font: "Fonte: google.sites.exercicios.com.br - 20 / 03 / 2018"
            },
            {
                id: 2,
                name: "5 Formas de fazer este exercício",
                uri: "https://i.imgur.com/9aTtNic.png",
                font: "Youtube - 30 / 01 / 2019"
            },
            {
                id: 3,
                name: "Os benefícios de exercitar-se no parque ",
                uri: "https://i.imgur.com/QKDdFcR.png?1",
                font: "Youtube - 05/ 10 / 2020"
            }
        ]
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handleNavigateBack()}>
                    <Icon name="arrow-left" size={20} color="#34C000" />
                </TouchableOpacity>


                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        state.names.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.button}
                            >
                                <Image style={styles.image} source={{ uri: item.uri }} />
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.textSmall}>{item.font}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight,
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },

    image: {
        width: 330,
        marginTop: 5,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginLeft: 4
    },

    button: {
        paddingBottom: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10
    },

    text: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        textAlign: 'left',
        fontFamily: 'Roboto_400Regular',
        color: '#00F',
        fontSize: 20,
        lineHeight: 23,
    },
    textSmall: {
        flex: 1,
        paddingLeft: 10,
        textAlign: 'left',
        fontFamily: 'Roboto_400Regular',
        color: '#696969',
        fontSize: 12,
        lineHeight: 23,
    }
});

export default aerobico;