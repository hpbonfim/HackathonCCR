import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'
import Landing from '../../components/Landing'

const Navigation = () => {

    const navigation = useNavigation()


    function handleNavigateMapa() {
        navigation.navigate('Mapa')
    }


    function handleNavigateSaude() {
        navigation.navigate('Saude')
    }


    function handleNavigateFerramentas() {
        navigation.navigate('Ferramentas')
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >

            <View style={styles.container}>
                <Landing />
            </View>

            <View style={styles.menuContainer}>

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleNavigateSaude()}
                    activeOpacity={0.6}
                >
                    <Image source={require('../../icons/saude.png')} style={styles.imagem} />
                    <Text style={styles.menuTitle}>Saúde</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => { styles.selectedItem, handleNavigateMapa() }}
                    activeOpacity={0.6}
                >
                    <Image source={require('../../icons/mapa.png')} style={styles.imagem} />

                    <Text style={styles.menuTitle}>Mapa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => handleNavigateFerramentas()}
                    activeOpacity={0.6}
                >
                    <Image source={require('../../icons/ferramentas.png')} style={styles.imagem} />

                    <Text style={styles.menuTitle}>Ferramentas</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 20 + Constants.statusBarHeight
    },

    menuContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
        justifyContent: 'center'

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
        justifyContent: 'space-between'
    },

    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2
    },

    menuTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13
    },

    imagem: {
        width: 64,
        height: 64
    },
});

export default Navigation;