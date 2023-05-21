import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import { useTasksStore } from '../store/tasks.store'
import { useState } from 'react'
import { FilterType } from '../types'
import { FilterTask } from './FilterTask'
import { MotiView } from 'moti'
import { useTheme } from '../context/theme.context'

const filterTypes: FilterType[] = ['all', 'active', 'completed']

export function Footer () {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const filteredTasks = useTasksStore(state => state.filteredTasks)
  const tasksLeft = filteredTasks.filter((task) => !task.completed).length

  const { theme } = useTheme()

  const clearCompletedTasks = useTasksStore(state => state.clearCompletedTasks)
  const filterTasks = useTasksStore(state => state.filterTasks)

  const handleFilter = (filter: FilterType) => {
    filterTasks(filter)
    setActiveFilter(filter)
  }

  const handleClearCompletedTasks = () => {
    if (!filteredTasks.some((task) => task.completed)) return
    Alert.alert('Clear Completed', 'Are you sure you want to clear completed tasks?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Clear',
        onPress: () => clearCompletedTasks()
      }
    ])
  }

  return (
    <View>
      <MotiView style={styles.info} animate={{ backgroundColor: theme.listBackground }}>
        <Text style={{ color: theme.text }}>{tasksLeft} {tasksLeft === 1 ? 'item' : 'items'} left</Text>
        <Pressable onPress={handleClearCompletedTasks}>
          <Text style={{ color: theme.text, paddingVertical: 16 }}>Clear Completed</Text>
        </Pressable>
      </MotiView>

      <MotiView style={styles.filters} animate={{ backgroundColor: theme.listBackground }}>
        {filterTypes.map((filter) => (
          <FilterTask key={filter} activeFilter={activeFilter} filter={filter} handleFilter={handleFilter} />
        ))}
      </MotiView>
    </View>
  )
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16
  }

})
