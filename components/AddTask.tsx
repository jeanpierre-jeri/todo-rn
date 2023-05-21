import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import { useTasksStore } from '../store/tasks.store'
import { useTheme } from '../context/theme.context'

export function AddTask () {
  const addTask = useTasksStore(state => state.addTask)
  const [title, setTitle] = useState('')
  const { theme } = useTheme()

  const handleSubmit = () => {
    addTask(title)
    setTitle('')
  }

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} style={[styles.input, { backgroundColor: theme.listBackground, color: theme.text }]} placeholder='Create a new todo...' placeholderTextColor={theme.text} onSubmitEditing={handleSubmit} />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 3,
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular'
  }
})
