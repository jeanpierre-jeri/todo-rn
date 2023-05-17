import { StatusBar } from 'expo-status-bar'
import { Layout } from './components/Layout'
import { StyleSheet, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useLoadFonts } from './hooks/useLoadFonts'
import { useEffect, useState } from 'react'
import { lightTheme } from './styles/theme'

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
    <View style={styles.container}>
      <StatusBar style='light' />
      <Layout />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.background
  }

})
