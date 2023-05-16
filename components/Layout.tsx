import { Image, StyleSheet, TextInput, View } from 'react-native'
import { lightTheme } from '../styles/theme'
import { Heading } from './Heading'

export function Layout () {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/bg-mobile-light.jpg')} />
      <View style={styles.container}>
        <Heading />
        <View>
          <TextInput style={styles.input} placeholder='Create a new todo...' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    gap: 40
  },
  image: {
    width: '100%',
    height: 200,
    position: 'absolute'
  },
  input: {
    width: '100%',
    backgroundColor: lightTheme.light,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 3
  }
})
