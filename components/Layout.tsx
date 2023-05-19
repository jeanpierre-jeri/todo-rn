import { Image, StyleSheet, View } from 'react-native'
import { Heading } from './Heading'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { Footer } from './Footer'
import { useTheme } from '../context/theme.context'
import { MotiView } from 'moti'

export function Layout () {
  const { theme } = useTheme()
  return (
    <MotiView style={{ height: '100%' }} animate={{ backgroundColor: theme.background }} transition={{ type: 'timing', duration: 300 }}>
      <Image style={styles.image} source={require('../assets/bg-mobile-light.jpg')} />
      <View style={styles.container}>
        <Heading />
        <AddTask />
        <TaskList />
        <Footer />
      </View>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute'
  }
})
