import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'

const controle = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    const state = {
        names: [
            {
                id: 0,
                name: "Pesquisas comprovam que trabalhar demais ...",
                uri: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2018/04/trabalho3-700x400.jpg&format=webp&hash=33288695566d996490f91589312bb761eb3fafd888b90a04301fb41349c432a0",
                font: "Fonte: cientistas.pesquisadores.com.br - 15 / 07 / 2020"
            },
            {
                id: 1,
                name: "Sabia como cuidar de sua carga horária.",
                uri: "https://www.brasildotrecho.com.br/wp-content/uploads/2020/04/Lei-prev%C3%AA-caminhoneiros-trabalhando-72-horas-e-dormir-com-caminh%C3%A3o-em-movimento-585x432.jpg",
                font: "Fonte: estradeiro.com.br - 20 / 03 / 2018"
            },
            {
                id: 2,
                name: "5 Formas de fazer este exercício",
                uri: "https://manualdohomemmoderno.com.br/files/2018/08/trabalhardemais.jpg",
                font: "Fonte: seutrabalho.com.br - 30 / 01 / 2019"
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
        paddingTop: 20 + Constants.statusBarHeight,
        paddingHorizontal: 32
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },

    image: {
        resizeMode: 'cover',
        width: 330,
        marginTop: 5,
        height: 200,
        borderRadius: 10,
        marginLeft: 4
    },

    button: {
        paddingBottom: 10,
        margin: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10
    },

    text: {
        flex: 1,
        paddingTop: 10,
        fontFamily: 'Roboto_400Regular',
        paddingLeft: 10,
        textAlign: 'left',
        color: '#00F',
        fontSize: 20,
        lineHeight: 23,
    },
    textSmall: {
        flex: 1,
        paddingLeft: 10,
        textAlign: 'left',
        color: '#696969',
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        lineHeight: 23,
    }
});

export default controle;