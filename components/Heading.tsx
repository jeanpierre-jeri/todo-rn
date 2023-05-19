import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MoonIcon, SunIcon } from './Icons'
import { lightTheme } from '../styles/theme'
import { useTheme } from '../context/theme.context'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export function Heading () {
  const { toggleTheme, colorScheme } = useTheme()
  const sunRotateZ = useSharedValue(colorScheme === 'light' ? 0 : -90)
  const moonRotateZ = useSharedValue(colorScheme === 'dark' ? 0 : 90)
  const sunOPacity = useSharedValue(colorScheme === 'light' ? 1 : 0)

  const onThemeToggle = () => {
    sunRotateZ.value = withTiming(sunRotateZ.value === 0 ? -90 : 0, {
      duration: 300
    })
    moonRotateZ.value = withTiming(moonRotateZ.value === 0 ? -90 : 0, {
      duration: 300
    })
    sunOPacity.value = withTiming(sunOPacity.value === 0 ? 1 : 0, {
      duration: 300
    })

    toggleTheme()
  }

  const sunStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sunOPacity.value, [0, 1], [1, 0], {
        extrapolateLeft: Extrapolate.CLAMP
      }),
      transform: [
        {
          rotateZ: `${interpolate(sunRotateZ.value, [0, -90], [-90, 0], {
            extrapolateRight: Extrapolate.CLAMP
          })}deg`
        }
      ]
    }
  })

  const moonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(sunOPacity.value, [1, 0], [1, 0]),
      transform: [
        {
          rotateZ: `${interpolate(moonRotateZ.value, [-90, 0], [0, -90], {
            extrapolateRight: Extrapolate.CLAMP
          })}deg`
        }
      ]
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        TODO
      </Text>
      <Pressable onPress={onThemeToggle} style={styles.icon}>
        <Animated.View style={[sunStyle, { position: 'absolute' }]}>
          <MoonIcon />
        </Animated.View>
        <Animated.View style={[moonStyle, { position: 'absolute' }]}>
          <SunIcon />
        </Animated.View>
      </Pressable>
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
  },
  icon: { width: 50, height: 50, position: 'relative', justifyContent: 'center', alignItems: 'center', marginBottom: -10 }
})
