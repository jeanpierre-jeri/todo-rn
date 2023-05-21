import { Pressable, StyleSheet, Text } from 'react-native'
import { FilterType } from '../types'
import { colors } from '../styles/theme'
import { useTheme } from '../context/theme.context'

interface Props {
  activeFilter: FilterType
  handleFilter: (filter: FilterType) => void
  filter: FilterType
}

export function FilterTask ({ activeFilter, handleFilter, filter }: Props) {
  const { theme } = useTheme()

  return (
    <Pressable onPress={() => handleFilter(filter)}>
      <Text style={[styles.text, { color: theme.text }, activeFilter === filter && styles.activeFilter]}>{filter}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    textTransform: 'capitalize',
    fontWeight: '500'
  },
  activeFilter: {
    color: colors.blue
  }
})
