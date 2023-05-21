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
import { useTasksStore } from './store/tasks.store'
import { getTasks } from './utils/storage'

void SplashScreen.preventAutoHideAsync()

export default function App () {
  const { loadFonts } = useLoadFonts()
  const [ready, setReady] = useState(false)
  const addInitialTasks = useTasksStore(state => state.addInitialTasks)

  useEffect(() => {
    const startApp = async () => {
      if (!ready) {
        const isReady = await loadFonts()
        const list = await getTasks()
        addInitialTasks(list)
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
