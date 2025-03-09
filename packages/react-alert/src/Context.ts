import { createContext } from 'react'
import { AlertContextType } from './types'

const Context = createContext<AlertContextType | null>(null)

export default Context
