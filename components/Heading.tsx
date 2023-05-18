import { StyleSheet, Text, View } from 'react-native'
import { MoonIcon } from './Icons'
import { lightTheme } from '../styles/theme'

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
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    color: lightTheme.light,
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    letterSpacing: 10
  }
})
