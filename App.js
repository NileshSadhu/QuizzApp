import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import GuessCapital from './Components/GuessCapital'
import { QuizProvider } from './Context/Connection'
import { useFonts } from 'expo-font'

const App = () => {
  const [fontsLoaded] = useFonts({
    'RobotoSerif-Medium': require('./assets/Fonts/RobotoSerif-Medium.ttf'),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizProvider>
        <StatusBar barStyle="light-content" />
        <GuessCapital />
      </QuizProvider>
    </SafeAreaView>
  )
}

export default App