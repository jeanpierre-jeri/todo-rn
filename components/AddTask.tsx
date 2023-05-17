import { StyleSheet, TextInput, View } from 'react-native'
import { lightTheme } from '../styles/theme'
import { useState } from 'react'
import { useTasksStore } from '../store/tasks.store'

export function AddTask () {
  const addTask = useTasksStore(state => state.addTask)
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    addTask(title)
    setTitle('')
  }

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Create a new todo...' onSubmitEditing={handleSubmit} />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: lightTheme.light,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 3,
    fontSize: 14,
    fontFamily: 'JosefinSans-Regular'
  }
})
