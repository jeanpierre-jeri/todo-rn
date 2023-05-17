import { FlatList, type ListRenderItemInfo, StyleSheet } from 'react-native'
import { type Task } from '../types'
import { TaskItem } from './TaskItem'
import { lightTheme } from '../styles/theme'
import { useTasksStore } from '../store/tasks.store'

export function TaskList () {
  const tasks = useTasksStore(state => state.tasks)
  const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
    return (
      <TaskItem task={item} />
    )
  }
  return (
    <FlatList style={styles.list} data={tasks} renderItem={renderItem} keyExtractor={item => item.id} />
  )
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: lightTheme.light,
    marginVertical: 16
  }
})
