
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'
import MapView, { Marker } from 'react-native-maps'
import { ScrollView } from 'react-native-gesture-handler'
import Axios from 'axios'
import * as Location from 'expo-location'

interface ResponseInterface {
    id: number
    nome: string
    latitude: number
    longitude: number
    uri: string
}


const Mapa = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setCalculateRoute(false)
        setShowPin(false)
    }, [])

    const [calculateRoute, setCalculateRoute] = useState<boolean>(false)
    function handleRouteButton() {
        if (calculateRoute)
            return setCalculateRoute(false)
        if (!calculateRoute)
            return setCalculateRoute(true)
    }

    const [showPin, setShowPin] = useState<boolean>(false)
    const [position, setPosition] = useState({
        latitude: -23.5888866,
        longitude: -46.6582143,
        latitudeDelta: 1.550,
        longitudeDelta: 0.550,
        //latitudeDelta: Math.abs(origin.latitude - destination.latitude) + Math.abs(origin.latitude - destination.latitude) * .1,
        //longitudeDelta: Math.abs(origin.longitude - destination.longitude) + Math.abs(origin.longitude - destination.longitude) * .1,
    });

    async function loadPosition() {
        const { status } = await Location.requestPermissionsAsync()

        if (status != 'granted')
            return Alert.alert('Ops...', 'Permissão não habilitada')


        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords
        setShowPin(true)
        return setPosition({
            ...position,
            latitude,
            longitude
        });
    }

    const [originText, setOriginText] = useState<String>('')
    const [destinationText, setDestinationText] = useState<String>('')

    function handleSearchRoute() {

        if (originText != '') {
            console.log(originText)
        }

        else {
            Alert.alert("Digite a origem ! ")
        }

        if (destinationText != '') {
            console.log(destinationText)
        }
        else {
            Alert.alert("Digite o destino ! ")
        }

    }


    const [isCrrLoading, setLoadingCrr] = useState(true);
    const [ccr, setCCR] = useState<ResponseInterface[]>([])
    useEffect(() => {
        setLoadingCrr(true)
        Axios.get('https://api.github.com/gists/139120b701ceb7e75d577234d4778b9b')
            .then(async response => {
                const { content } = response.data.files.CCR
                setCCR(JSON.parse(content))
            })
            .catch((err) => {
                Alert.alert('Crr não está ativo')
            })
    }, [])

    function handleCrrButton() {
        if (isCrrLoading)
            return setLoadingCrr(false)
        if (!isCrrLoading)
            return setLoadingCrr(true)
    }


    const [isRestaurantLoading, setLoadingRestaurant] = useState(true);
    const [restaurant, setRestaurant] = useState<ResponseInterface[]>([])
    useEffect(() => {
        setLoadingRestaurant(true)
        Axios.get('https://api.github.com/gists/650fe727efa1975e303b0b022a829ef8')
            .then(async response => {
                const { content } = response.data.files.restaurantes
                setRestaurant(JSON.parse(content))
            })
            .catch((err) => {
                Alert.alert('Restaurante não está ativo')
            })
    }, [])

    function handleRestaurantButton() {
        if (isRestaurantLoading)
            return setLoadingRestaurant(false)
        if (!isRestaurantLoading)
            return setLoadingRestaurant(true)
    }


    const [isSleepLoading, setLoadingSleep] = useState(true);
    const [sleep, setSleep] = useState<ResponseInterface[]>([])
    useEffect(() => {
        setLoadingSleep(true)
        Axios.get('https://api.github.com/gists/14a6a8e96aa5de7767e4b44a5aeedea7')
            .then(async response => {
                const { content } = response.data.files.sleep
                setSleep(JSON.parse(content))
            })
            .catch((err) => {
                Alert.alert('Dormir não está ativo')
            })
    }, [])

    function handleSleepButton() {
        if (isSleepLoading)
            return setLoadingSleep(false)
        if (!isSleepLoading)
            return setLoadingSleep(true)
    }


    const [isSaudeLoading, setLoadingSaude] = useState(true);
    const [saude, setSaude] = useState<ResponseInterface[]>([])
    useEffect(() => {
        setLoadingSaude(true)
        Axios.get('https://api.github.com/gists/39465505fa0ebe2d4458dce0e6d3fa13')
            .then(async response => {
                const { content } = response.data.files.saude
                setSaude(JSON.parse(content))
            })
            .catch((err) => {
                Alert.alert('Saude não está ativo')
            })
    }, [])

    function handleSaudeButton() {
        if (isSaudeLoading)
            return setLoadingSaude(false)
        if (!isSaudeLoading)
            return setLoadingSaude(true)
    }



    const [isGasLoading, setLoadingGas] = useState(true);
    const [gas, setGas] = useState<ResponseInterface[]>([])
    useEffect(() => {
        setLoadingGas(true)
        Axios.get('https://api.github.com/gists/65ea6877abe349af7f4696c1c796b604') 
            .then(async response => {
                const { content } = response.data.files.gas
                setGas(JSON.parse(content))
            })
            .catch((err) => {
                Alert.alert('Gas não está ativo')
            })
    }, [])

    function handleGasButton() {
        if (isGasLoading)
            return setLoadingGas(false)
        if (!isGasLoading)
            return setLoadingGas(true)
    }


    return (
        <SafeAreaView style={{ flex: 1 }} >


            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                    region={position}
                    onPress={e =>
                        setPosition({
                            ...position,
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })}
                >

                    <Marker
                        style={[showPin ? styles.hidden : {}]}
                        coordinate={position}
                        pinColor={'green'}
                    >

                    </Marker>


                    {isCrrLoading ? <></> : (
                        ccr.map(objs => (
                            <Marker
                                key={objs.id}
                                style={styles.mapMarker}
                                coordinate={{
                                    latitude: objs.latitude,
                                    longitude: objs.longitude,
                                }} >
                                <View style={styles.mapCrrMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri: objs.uri }} />
                                    <Text style={styles.mapMarkerTitle}>{objs.nome}</Text>
                                </View>
                            </Marker>
                        ))
                    )}

                    {isRestaurantLoading ? <></> : (
                        restaurant.map(objs => (
                            <Marker
                                key={objs.id}
                                style={styles.mapMarker}
                                coordinate={{
                                    latitude: objs.latitude,
                                    longitude: objs.longitude,
                                }} >
                                <View style={styles.mapRestaurantMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri: objs.uri }} />
                                    <Text style={styles.mapMarkerTitle}>{objs.nome}</Text>
                                </View>
                            </Marker>
                        ))
                    )}

                    {isSleepLoading ? <></> : (
                        sleep.map(objs => (
                            <Marker
                                key={objs.id}
                                style={styles.mapMarker}
                                coordinate={{
                                    latitude: objs.latitude,
                                    longitude: objs.longitude,
                                }} >
                                <View style={styles.mapMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri: objs.uri }} />
                                    <Text style={styles.mapMarkerTitle}>{objs.nome}</Text>
                                </View>
                            </Marker>
                        ))
                    )}

                    {isSaudeLoading ? <></> : (
                        saude.map(objs => (
                            <Marker
                                key={objs.id}
                                style={styles.mapSaudeMarker}
                                coordinate={{
                                    latitude: objs.latitude,
                                    longitude: objs.longitude,
                                }} >
                                <View style={styles.mapSaudeMarkerContainer}>
                                    <Image style={styles.mapSaudeMarkerImage} source={{ uri: objs.uri }} />
                                    <Text style={styles.mapSaudeMarkerTitle}>{objs.nome}</Text>
                                </View>
                            </Marker>
                        ))
                    )}

                    {isGasLoading ? <></> : (
                        gas.map(objs => (
                            <Marker
                                key={objs.id}
                                style={styles.mapMarker}
                                coordinate={{
                                    latitude: objs.latitude,
                                    longitude: objs.longitude,
                                }} >
                                <View style={styles.mapGasMarkerContainer}>
                                    <Image style={styles.mapMarkerImage} source={{ uri: objs.uri }} />
                                    <Text style={styles.mapMarkerTitle}>{objs.nome}</Text>
                                </View>
                            </Marker>
                        ))
                    )}

                </MapView>
                <View style={[styles.inputContainer, !calculateRoute ? styles.hidden : {}]}>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setOriginText(text)}
                        placeholder='  A: Origem'
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setOriginText(text)}
                        placeholder='  B: Destino'
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSearchRoute}>
                        <Icon name="search"></Icon>
                        <Text style={styles.buttonText}>Buscar rota</Text>

                    </TouchableOpacity>

                </View>
                <View style={[styles.buttonLocate, !calculateRoute ? styles.buttonLocateAdjust : {}]} >
                    <TouchableOpacity onPress={loadPosition}>
                        <Icon name="crosshair"></Icon>
                    </TouchableOpacity>

                </View>
            </View>


            <View style={styles.itemsContainer}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20
                    }}>

                    <TouchableOpacity
                        style={[styles.item, calculateRoute ? styles.selectedItem : {}]}
                        onPress={() => handleRouteButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/finish.png')} />
                        <Text style={styles.itemTitle}>Calcular Rota</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item, !isCrrLoading ? styles.selectedItem : {}]}
                        onPress={() => handleCrrButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={{ width: 38, height: 48 }} source={require('../../../icons/ccr.png')} />

                        <Text style={styles.itemTitle}>Postos CCR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item, !isRestaurantLoading ? styles.selectedItem : {}]}
                        onPress={() => handleRestaurantButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/cafe.png')} />

                        <Text style={styles.itemTitle}>Locais de Alimentação</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item, !isSleepLoading ? styles.selectedItem : {}]}
                        onPress={() => handleSleepButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/sleep.png')} />

                        <Text style={styles.itemTitle}>Locais de Descanso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.item, !isGasLoading ? styles.selectedItem : {}]}
                        onPress={() => handleGasButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/fuel.png')} />

                        <Text style={styles.itemTitle}>Postos de Combustível</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[styles.item, !isSaudeLoading ? styles.selectedItem : {}]}
                        onPress={() => handleSaudeButton()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../icons/heart.png')} />
                        <Text style={styles.itemTitle}>Estrada para Saúde</Text>
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

    hidden: {
        display: "none"
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
        marginTop: 22,

    },

    map: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapSaudeMarker: {
        width: 150,
        height: 80,
    },

    mapSaudeMarkerContainer: {
        width: 150,
        height: 70,
        backgroundColor: '#B22222',
        flexDirection: 'column',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapGasMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#8FBC8F',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapRestaurantMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#5F9EA0',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapCrrMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#A52A2A',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#FF8C00',
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

    mapSaudeMarkerImage: {
        width: 150,
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

    mapSaudeMarkerTitle: {
        flex: 1,
        fontFamily: 'Roboto_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
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


    button: {
        width: 80,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginBottom: 15,
        marginHorizontal: 20,
    },

    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },

    inputContainer: {
        paddingTop: 10
    },

    input: {
        borderRadius: 7,
        maxHeight: 200,
        height: 40,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 20,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#000'
    },

    buttonLocate: {
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginHorizontal: 20,
    },

    buttonLocateAdjust: {
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginHorizontal: 20,
        marginTop: 5 + Constants.statusBarHeight
    }
});

export default Mapa;