import { createContext, useContext, useEffect, useState } from 'react'
import { useColorScheme, Appearance } from 'react-native'
import { theme } from '../styles/theme'

export const ThemeContext = createContext({
  colorScheme: 'light',
  toggleTheme: () => {},
  theme: theme.light
})

export function ThemeProvider ({ children }: { children: React.ReactNode }) {
  const currentColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] = useState(currentColorScheme ?? 'light')
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: nextColorScheme }) => {
      if (nextColorScheme != null && nextColorScheme !== colorScheme) {
        setColorScheme(nextColorScheme)
      }
    })
    return () => subscription.remove()
  }, [colorScheme])

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider value={{
      theme: theme[colorScheme],
      toggleTheme,
      colorScheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
