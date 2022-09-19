import { atom, selector } from 'recoil'
import { Task } from '../types/Task'

export const addTitltState = atom<Array<Task>>({
  key: 'addTitleState',
  default: [],
})

export const addTitleStateLength = selector<number>({
  key: 'addTitleStateLength',
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitltState)
    return addTitleNumber?.length || 0
  },
})
