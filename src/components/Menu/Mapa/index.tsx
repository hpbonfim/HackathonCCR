import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'
import MapView, { Marker } from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
import UFs from './uf.json'


interface Item {
    id: number
    title: string
    image_url: string
  }

  interface IBGEUFResponse {
    sigla: string;
}

interface SanitizeMapClickedResponse {
    uf: string;
    localidade: string
}


const Mapa = () => {

    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    /* GET ITEMS API */
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        axios.get('http://rotasbrasil.com.br/apiRotas/coordenadas/?pontos=-50.1601812,-25.0891685;-49.2712724,-25.4295963&veiculo=auto&eixo=2&token={7f325c72e09e2c1e80eae74a211492f7}&paradas=true')
            .then(response => {
                console.log(response.data)
            })
            .catch((err) => {
                Alert.alert('Erro ao buscar os dados')
            })
    }, [])
    /* --- */

    /* IBGE UF */
    const [ufs, setUfs] = useState<string[]>([]);
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                setUfs(response.data.map(uf => uf.sigla));
                console.log(ufs)
            })
    }, [])
    /* --- */


    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>

                <MapView style={styles.map}
                    initialRegion={{
                        latitude: -0,
                        longitude: -0,
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014
                    }}>

                    <Marker
                        style={styles.mapMarker}
                        coordinate={{
                            latitude: -0,
                            longitude: -0,
                        }} >
                        <View style={styles.mapMarkerContainer}>
                            <Image style={styles.mapMarkerImage} source={require('../../../icons/pedagio.png')} />
                            <Text style={styles.mapMarkerTitle}>pedagio</Text>
                        </View>
                    </Marker>

                </MapView>

            </View>


            <View style={styles.itemsContainer}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20
                    }}>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/finish.png')} />
                        <Text style={styles.itemTitle}>Calcular Rota</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={{ width: 38, height: 48 }} source={require('../../../icons/ccr.png')} />

                        <Text style={styles.itemTitle}>Postos CCR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/fuel.png')} />

                        <Text style={styles.itemTitle}>Postos de Gasolina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/cafe.png')} />

                        <Text style={styles.itemTitle}>Locais de Alimentação</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/sleep.png')} />

                        <Text style={styles.itemTitle}>Locais de Descanso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => ('')}
  activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/police.png')} />
                        <Text style={styles.itemTitle}>Posto Policial</Text>
                    </TouchableOpacity>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingTop: 10 + Constants.statusBarHeight,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },

    mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
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
        borderColor: '#34CB79',
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
});

export default Mapa;