import { StyleSheet, View } from 'react-native'
import { colors, lightTheme } from '../styles/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { CheckIcon } from './Icons'

export function Completed ({ completed }: { completed: boolean }) {
  if (!completed) return <View style={styles.check} />

  return (
    <LinearGradient
      colors={[colors.primaryGradient, colors.secondaryGradient]}
      style={styles.gradient}
      start={{ x: -1, y: -1 }}
      end={{ x: 1, y: 1 }}
    >
      <CheckIcon />
    </LinearGradient>
  )
};

const sharedStyles = {
  width: 20,
  height: 20,
  borderRadius: 50,
  marginTop: 2
}

const styles = StyleSheet.create({
  check: {
    ...sharedStyles,
    borderColor: lightTheme.lightGray,
    borderWidth: 1
  },
  gradient: {
    ...sharedStyles,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
