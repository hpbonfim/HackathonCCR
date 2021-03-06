import React from 'react'
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Image, Text, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import Constants from 'expo-constants'


const Ferramentas = () => {
  const navigation = useNavigation()

  function handleNavigateBack() {
    navigation.goBack()
  }

  function handleNavigateListaCCR() {
    navigation.navigate('listaCCR')
  }

  function handleNavigateDialetoEstradeiro() {
    navigation.navigate('dialetoEstradeiro')
  }

  function handleNavigateLanterna() {
    navigation.navigate('lanterna')
  }

  function handleNavigateMeuCaminhao() {
    navigation.navigate('meuCaminhao')
  }

  function handleNavigateMeusNegocios() {
    navigation.navigate('meusNegocios')
  }

  function handleNavigateMinhaAgenda() {
    navigation.navigate('minhaAgenda')
  }

  function handleNavigateSosMecanica() {
    navigation.navigate('sosMecanica')
  }
  
  function handleNavigateValeDescontos() {
    navigation.navigate('valeDescontos')
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >

      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleNavigateBack()}>
          <Icon name="arrow-left" size={20} color="#34C000" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.imageLogo} source={require('../../../../assets/canivete.png')} />
        </View>

      </View>


      <View style={styles.menuContainer}>

        <View style={styles.upContainer}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateMeusNegocios()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/money.png')} />

            <Text style={styles.itemTitle}>Meus Negócios</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateValeDescontos()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/coupon.png')} />
            <Text style={styles.itemTitle}>Vale Descontos</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateMeuCaminhao()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/logo.png')} />
            <Text style={styles.itemTitle}>Meu Caminhão</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.downContainer}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateDialetoEstradeiro()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/guide.png')} />
            <Text style={styles.itemTitle}>Dialeto</Text>
            <Text style={styles.itemSubtitle}>Estradeiro</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateLanterna()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/light.png')} />
            <Text style={styles.itemTitle}>Lanterna</Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateMinhaAgenda()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/book.png')} />

            <Text style={styles.itemTitle}>Minha Agenda</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.upContainer}>
          <TouchableOpacity
            style={[styles.item, styles.sos]}
            onPress={() => handleNavigateSosMecanica()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/worker.png')} />
            <Text style={styles.itemTitle}>S.O.S</Text>
            <Text style={styles.itemSubtitle}> Mecânica</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.item, styles.sos]}
            onPress={() => handleNavigateListaCCR()}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/sos.png')} />
            <Text style={styles.itemTitle}>S.O.S</Text>
            <Text style={styles.itemSubtitle}>CCR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.item, styles.sos]}
            onPress={() => { Linking.openURL('tel:190'); }}
            activeOpacity={0.6}
          >
            <Image style={styles.imagem} source={require('../../../icons/police.png')} />

            <Text style={styles.itemTitle}>S.O.S</Text>
            <Text style={styles.itemSubtitle} >Polícia</Text>

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
    flex: 2,
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

  sos: {
    borderColor: '#ff0000',
    borderWidth: 2,
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