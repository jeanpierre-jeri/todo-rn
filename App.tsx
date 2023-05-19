/* eslint-disable import/no-duplicates */
import 'react-native-reanimated'

import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { Layout } from './components/Layout'
import * as SplashScreen from 'expo-splash-screen'
import { useLoadFonts } from './hooks/useLoadFonts'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme.context'

void SplashScreen.preventAutoHideAsync()

export default function App () {
  const { loadFonts } = useLoadFonts()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const startApp = async () => {
      if (!ready) {
        const isReady = await loadFonts()
        setReady(isReady)
        await SplashScreen.hideAsync()
      }
    }

    void startApp()
  }, [loadFonts])

  if (!ready) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style='light' />
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
