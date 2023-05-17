import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Task } from '../types'
import { lightTheme } from '../styles/theme'
import { CrossIcon } from './Icons'
import { Completed } from './Completed'
import { useTasksStore } from '../store/tasks.store'

export function TaskItem ({ task }: { task: Task }) {
  const [removeTask, toggleTask] = useTasksStore(state => [state.removeTask, state.toggleTask])
  return (
    <View style={styles.container}>
      <Pressable onPress={() => toggleTask(task.id)}>
        <View style={styles.done}>
          <Completed completed={task.completed} />
          <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => removeTask(task.id)}>
        <View style={styles.delete}>
          <CrossIcon />
        </View>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.lightGray,
    gap: 12
  },
  title: {
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular',
    color: lightTheme.text
  },
  done: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  completed: {
    textDecorationLine: 'line-through'
  },
  delete: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
