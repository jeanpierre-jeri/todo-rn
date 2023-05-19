import { create } from 'zustand'
import { FilterType, Task } from '../types'
import * as Crypto from 'expo-crypto'

const initialTasks = [
  {
    id: Crypto.randomUUID(),
    title: 'I have to be the best develoepr in the world and rule the world with javascript and typescript',
    completed: true

  },
  {
    id: Crypto.randomUUID(),
    title: 'Complete online JavaScript course 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16',
    completed: true

  },
  {
    id: Crypto.randomUUID(),
    title: 'Jog around the park 3x',
    completed: false

  },
  {
    id: Crypto.randomUUID(),
    title: '10 minutes meditation',
    completed: false
  },
  {
    id: Crypto.randomUUID(),
    title: 'Read for 1 hour',
    completed: true
  },
  {
    id: Crypto.randomUUID(),
    title: 'Pick up groceries',
    completed: false
  }
]

interface TaskStore {
  tasks: Task[]
  filteredTasks: Task[]
  addTask: (title: string) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
  clearCompletedTasks: () => void
  filterTasks: (filter: FilterType) => void
}

export const useTasksStore = create<TaskStore>()((set, get) => ({
  tasks: initialTasks,
  filteredTasks: initialTasks,
  addTask: (title) => {
    const tasks = [
      {
        id: Crypto.randomUUID(),
        title,
        completed: false
      },
      ...get().tasks
    ]

    set({ tasks, filteredTasks: tasks })
  },
  removeTask: (id) => {
    const tasks = get().tasks.filter((task) => task.id !== id)
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

    set({ tasks, filteredTasks: tasks })
  },
  clearCompletedTasks: () => {
    const tasks = get().tasks.filter((task) => !task.completed)
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
