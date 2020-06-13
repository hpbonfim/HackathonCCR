import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Navigation from './pages/Navigation'
import Mapa from './components/Menu/Mapa'
import Saude from './components/Menu/Saude'
import dicas from './components/Menu/Saude/dicas'
import examesMedicos from './components/Menu/Saude/examesMedicos'

import exercicios from './components/Menu/Saude/exercicios'
import aerobico from './components/Menu/Saude/exercicios/aerobico'
import alongamento from './components/Menu/Saude/exercicios/alongamento'
import fortalecimento from './components/Menu/Saude/exercicios/fortalecimento'



import medicamentos from './components/Menu/Saude/medicamentos'
import meuMedico from './components/Menu/Saude/meuMedico'
import minhaSaude from './components/Menu/Saude/minhaSaude'


import Ferramentas from './components/Menu/Ferramentas'
import listaCCR from './components/Menu/Ferramentas/listaCCR'
import dialetoEstradeiro from './components/Menu/Ferramentas/dialetoEstradeiro'
import lanterna from './components/Menu/Ferramentas/lanterna'
import meuCaminhao from './components/Menu/Ferramentas/meuCaminhao'
import meusNegocios from './components/Menu/Ferramentas/meusNegocios'
import minhaAgenda from './components/Menu/Ferramentas/minhaAgenda'
import sosMecanica from './components/Menu/Ferramentas/sosMecanica'
import valeDescontos from './components/Menu/Ferramentas/valeDescontos'


const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: { backgroundColor: '#f0f0f5' }
                }}
            >
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="Mapa" component={Mapa} />

                <Stack.Screen name="Saude" component={Saude} />
                <Stack.Screen name="dicas" component={dicas} />
                <Stack.Screen name="examesMedicos" component={examesMedicos} />
                <Stack.Screen name="medicamentos" component={medicamentos} />
                <Stack.Screen name="meuMedico" component={meuMedico} />
                <Stack.Screen name="minhaSaude" component={minhaSaude} />
                <Stack.Screen name="exercicios" component={exercicios} />
                <Stack.Screen name="aerobico" component={aerobico} />
                <Stack.Screen name="alongamento" component={alongamento} />
                <Stack.Screen name="fortalecimento" component={fortalecimento} />


                <Stack.Screen name="Ferramentas" component={Ferramentas} />
                <Stack.Screen name="dialetoEstradeiro" component={dialetoEstradeiro} />
                <Stack.Screen name="lanterna" component={lanterna} />
                <Stack.Screen name="meuCaminhao" component={meuCaminhao} />
                <Stack.Screen name="meusNegocios" component={meusNegocios} />
                <Stack.Screen name="minhaAgenda" component={minhaAgenda} />
                <Stack.Screen name="sosMecanica" component={sosMecanica} />
                <Stack.Screen name="valeDescontos" component={valeDescontos} />
                <Stack.Screen name="listaCCR" component={listaCCR} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;