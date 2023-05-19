import { Pressable, StyleSheet, Text, View } from 'react-native'
import { lightTheme } from '../styles/theme'
import { useTasksStore } from '../store/tasks.store'
import { useState } from 'react'
import { FilterType } from '../types'
import { FilterTask } from './FilterTask'

const filterTypes: FilterType[] = ['all', 'active', 'completed']

export function Footer () {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const filteredTasks = useTasksStore(state => state.filteredTasks)
  const tasksLeft = filteredTasks.filter((task) => !task.completed).length

  const clearCompletedTasks = useTasksStore(state => state.clearCompletedTasks)
  const filterTasks = useTasksStore(state => state.filterTasks)

  const handleFilter = (filter: FilterType) => {
    filterTasks(filter)
    setActiveFilter(filter)
  }
  return (
    <View>
      <View style={styles.info}>
        <Text>{tasksLeft} {tasksLeft === 1 ? 'item' : 'items'} left</Text>
        <Pressable onPress={clearCompletedTasks}>
          <Text>Clear Completed</Text>
        </Pressable>
      </View>

      <View style={styles.filters}>
        {filterTypes.map((filter) => (
          <FilterTask key={filter} activeFilter={activeFilter} filter={filter} handleFilter={handleFilter} />
        ))}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: lightTheme.light,
    color: lightTheme.lightGray,
    paddingHorizontal: 20,
    paddingVertical: 16
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: lightTheme.light,
    color: lightTheme.lightGray,
    marginTop: 16
  }

})
