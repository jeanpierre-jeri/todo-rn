import { Image, StyleSheet, View } from 'react-native'
import { Heading } from './Heading'
import { TaskList } from './TaskList'
import { AddTask } from './AddTask'
import { Footer } from './Footer'

export function Layout () {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/bg-mobile-light.jpg')} />
      <View style={styles.container}>
        <Heading />
        <AddTask />
        <TaskList />
        <Footer />
      </View>
    </View>
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
