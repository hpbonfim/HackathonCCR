import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'
import lista from '../../../../../mock/ccr.json'

const listaCCR = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    const state = {
        names: [
            {
                id: 0,
                name: String(lista.CCRSPVias.nome),
                telefone: String(lista.CCRSPVias.telefone1)
            },
            {
                id: 1,
                name: String(lista.CCRRodoAnel.nome),
                telefone: String(lista.CCRRodoAnel.telefone1)

            },
            {
                id: 2,
                name: String(lista.CCRViaOeste.nome),
                telefone: String(lista.CCRViaOeste.telefone1)

            },
            {
                id: 3,
                name: String(lista.Renovias.nome),
                telefone: String(lista.Renovias.telefone1)

            },
            {
                id: 4,
                name: String(lista.ViaRio.nome),
                telefone: String(lista.ViaRio.telefone1)

            },
            {
                id: 5,
                name: String(lista.CCRMSVia.nome),
                telefone: String(lista.CCRMSVia.telefone1)

            },
            {
                id: 6,
                name: String(lista.EcoPonte.nome),
                telefone: String(lista.EcoPonte.telefone1)

            },
            {
                id: 7,
                name: String(lista.CCRViaSul.nome),
                telefone: String(lista.CCRViaSul.telefone1)

            },
            {
                id: 8,
                name: String(lista.CCRAutoBAn.nome),
                telefone: String(lista.CCRAutoBAn.telefone1)

            },
            {
                id: 9,
                name: String(lista.CCRNovaDutra.nome),
                telefone: String(lista.CCRNovaDutra.telefone1)

            },
            {
                id: 10,
                name: String(lista.CCRViaLagos.nome),
                telefone: String(lista.CCRViaLagos.telefone1)

            },
            {
                id: 11,
                name: String(lista.CCRRodoNorte.nome),
                telefone: String(lista.CCRRodoNorte.telefone1)
            }
        ]
    }
    const alertItemName = (item: any) => {
        Alert.alert(`${item.name} 
        Telefone: ${item.telefone}`)
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handleNavigateBack()}>
                    <Icon name="arrow-left" size={20} color="#34C000" />
                </TouchableOpacity>


                <ScrollView showsVerticalScrollIndicator={false} style={styles.textContainer}>
                    {
                        state.names.map((item, index) => (
                            <TouchableOpacity
                                key={item.id}
                                style={styles.button}
                                onPress={() => alertItemName(item)}>
                                <Text style={styles.text}>
                                    {item.name}
                                </Text>
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

    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },

    selectedItem: {
        borderColor: '#34C000',
        borderWidth: 2,
    },

    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 15,
    },

    imagem: {
        width: 42,
        height: 42
    },

    textContainer: {
    },

    button: {
        padding: 30,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#004923',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 22
    }
});

export default listaCCR;