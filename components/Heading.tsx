import { StyleSheet, Text, View } from 'react-native'
import { MoonIcon } from './Icons'

export function Heading () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        TODO
      </Text>
      <MoonIcon />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'JosefinSans-Bold',
    letterSpacing: 10
  }
})
