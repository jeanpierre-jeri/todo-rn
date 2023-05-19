import { StyleSheet } from 'react-native'
import { colors } from '../styles/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { CheckIcon } from './Icons'
import { MotiView } from 'moti'
import { useTheme } from '../context/theme.context'

export function Completed ({ completed }: { completed: boolean }) {
  const { theme } = useTheme()

  if (!completed) {
    return (
      <MotiView
        style={styles.check} animate={{ borderColor: theme.border }} transition={{
          duration: 300,
          type: 'timing'
        }}
      />
    )
  }

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
    borderWidth: 1
  },
  gradient: {
    ...sharedStyles,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
