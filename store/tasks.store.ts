import { create } from 'zustand'
import { FilterType, Task } from '../types'
import * as Crypto from 'expo-crypto'
import { storeTasks } from '../utils/storage'

interface TaskStore {
  tasks: Task[]
  filteredTasks: Task[]
  addInitialTasks: (tasks: Task[]) => void
  addTask: (title: string) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
  clearCompletedTasks: () => void
  filterTasks: (filter: FilterType) => void
}

export const useTasksStore = create<TaskStore>()((set, get) => ({
  tasks: [],
  filteredTasks: [],
  addTask: (title) => {
    const tasks = [
      {
        id: Crypto.randomUUID(),
        title,
        completed: false
      },
      ...get().tasks
    ]

    void storeTasks(tasks)

    set({ tasks, filteredTasks: tasks })
  },
  addInitialTasks: (tasks) => {
    set({ tasks, filteredTasks: tasks })
  },
  removeTask: (id) => {
    const tasks = get().tasks.filter((task) => task.id !== id)
    void storeTasks(tasks)
    set({ tasks, filteredTasks: tasks })
  },
  toggleTask: (id) => {
    const tasks = get().tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    })

    void storeTasks(tasks)
    set({ tasks, filteredTasks: tasks })
  },
  clearCompletedTasks: () => {
    const tasks = get().tasks.filter((task) => !task.completed)
    void storeTasks(tasks)
    set({ tasks, filteredTasks: tasks })
  },
  filterTasks: (filter) => {
    set(state => {
      const tasks = [...state.tasks]
      if (filter === 'active') {
        return {
          filteredTasks: tasks.filter(task => !task.completed)
        }
      }

      if (filter === 'completed') {
        return {
          filteredTasks: tasks.filter(task => task.completed)
        }
      }

      return { filteredTasks: tasks }
    })
  }
}))
