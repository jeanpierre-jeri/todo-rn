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
      <Pressable onPress={() => toggleTask(task.id)} style={styles.done}>
        <Completed completed={task.completed} />
        <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
      </Pressable>
      <Pressable onPress={() => removeTask(task.id)} style={styles.delete}>
        <CrossIcon />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: lightTheme.lightGray,
    paddingHorizontal: 20,
    gap: 12
    // minHeight: 52
  },
  title: {
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular',
    color: lightTheme.text
  },
  done: {
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 12,
    paddingRight: 25,
    alignItems: 'center',
    flex: 1
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
