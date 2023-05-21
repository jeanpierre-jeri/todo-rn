import AsyncStorage from '@react-native-async-storage/async-storage'
import { Task } from '../types'

export const storeTasks = async (value: Task[]) => {
  const list = JSON.stringify(value)
  await AsyncStorage.setItem('list', list).catch(console.log)
}

export const getTasks = async (): Promise<Task[]> => {
  const list = await AsyncStorage.getItem('list').catch(console.log)
  return list != null ? JSON.parse(list) : []
}
