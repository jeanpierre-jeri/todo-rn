import { FlatList, type ListRenderItemInfo, StyleSheet } from 'react-native'
import { type Task } from '../types'
import { TaskItem } from './TaskItem'
import { useTasksStore } from '../store/tasks.store'

export function TaskList () {
  const filteredTasks = useTasksStore(state => state.filteredTasks)
  const renderItem = ({ item }: ListRenderItemInfo<Task>) => {
    return (
      <TaskItem task={item} />
    )
  }
  return (
    <FlatList style={styles.list} data={filteredTasks} renderItem={renderItem} keyExtractor={item => item.id} />
  )
}

const styles = StyleSheet.create({
  list: {
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 16,
    height: '65%'
  }
})
