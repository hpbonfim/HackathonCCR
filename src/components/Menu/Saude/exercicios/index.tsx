import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'


const Ferramentas = () => {
    const navigation = useNavigation()

    function handleNavigateBack() {
        navigation.goBack()
    }

    function handleNavigateAerobico() {
        navigation.navigate('aerobico')
      }
    
      function handleNavigateAlongamento() {
        navigation.navigate('alongamento')
      }
    
      function handleNavigateFortalecimento() {
        navigation.navigate('fortalecimento')
      }
    

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => handleNavigateBack()}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageLogo} source={require('../../../../icons/exercise.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>Exercícios</Text>
                </View>
            </View>

            <View style={styles.menuContainer}>
                
                <View style={styles.downContainer}>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleNavigateAlongamento()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../../icons/exercise.png')} />
                        <Text style={styles.itemTitle}>Alongamentos</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleNavigateFortalecimento()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../../icons/exercise.png')} />

                        <Text style={styles.itemTitleSmall}>Fortalecimento</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => handleNavigateAerobico()}
                        activeOpacity={0.5}
                    >
                        <Image style={styles.imagem} source={require('../../../../icons/exercise.png')} />
                        <Text style={styles.itemTitle}>Aeróbico</Text>
                    </TouchableOpacity>


                </View>


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
    menuContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    imageContainer: {
        paddingHorizontal: 20,
    },
    upContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    downContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
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
        borderRadius: 8,
        height: 120,
        width: 120,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
    },

    textContainer: {
        alignItems: 'center',
        paddingTop: 10,
        textAlign: 'center'
    },
    textTitle: {
        fontSize: 64,
        fontFamily: 'Girassol_400Regular'
    },
    itemTitleSmall: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 14.5,
        justifyContent: 'center',
    },
    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 15,
        justifyContent: 'center',
    },
    itemSubtitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 15,
    },

    imagem: {
        width: 42,
        height: 42,
        marginBottom: 10
    },
    imageLogo: {
        width: 300,
        height: 245
    }
});

export default Ferramentas;