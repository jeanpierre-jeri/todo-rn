import { Pressable, StyleSheet, Text } from 'react-native'
import { Task } from '../types'
import { CrossIcon } from './Icons'
import { Completed } from './Completed'
import { useTasksStore } from '../store/tasks.store'
import { MotiView } from 'moti'
import { useTheme } from '../context/theme.context'

export function TaskItem ({ task }: { task: Task }) {
  const [removeTask, toggleTask] = useTasksStore(state => [state.removeTask, state.toggleTask])
  const { theme, colorScheme } = useTheme()
  return (
    <MotiView style={styles.container} animate={{ borderColor: theme.border, backgroundColor: theme.listBackground }} transition={{ duration: 300, type: 'timing' }}>
      <Pressable onPress={() => toggleTask(task.id)} style={styles.done}>
        <Completed completed={task.completed} />
        <Text style={[styles.title, task.completed && styles.completed, { color: theme.text }]}>{task.title}</Text>
      </Pressable>
      <Pressable onPress={() => removeTask(task.id)} style={styles.delete}>
        <CrossIcon fill={colorScheme === 'light' ? '#494C6B' : '#fff'} />
      </Pressable>
    </MotiView>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    gap: 12
  },
  title: {
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular'
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
