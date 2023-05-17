import { create } from 'zustand'
import { Task } from '../types'
import * as Crypto from 'expo-crypto'

const initialTasks = [
  {
    id: Crypto.randomUUID(),
    title: 'I have to be the best develoepr in the world and rule the world with javascript',
    completed: true

  },
  {
    id: Crypto.randomUUID(),
    title: 'Complete online JavaScript course',
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
  addTask: (title: string) => void
  removeTask: (id: string) => void
  toggleTask: (id: string) => void
}

export const useTasksStore = create<TaskStore>()((set, get) => ({
  tasks: initialTasks,
  addTask: (title) => {
    set((state) => ({
      tasks: [
        {
          id: Crypto.randomUUID(),
          title,
          completed: false
        },
        ...state.tasks
      ]
    }))
  },
  removeTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    }))
  },
  toggleTask: (id) => {
    const tasks = get().tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task
    })

    set({ tasks })
  }
}))
