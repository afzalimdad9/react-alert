import React from "react"
import { transitions } from "./options"

export interface AlertOptions {
  position: string
  timeout: number
  type: string
  onClose?: () => void
  onOpen?: () => void
}

export interface Alert {
  id: string
  message: string
  options: AlertOptions
  close: () => void
}

export interface ProviderProps {
  offset: string
  position: string
  timeout: number
  type: string
  transition: keyof typeof transitions
  containerStyle: React.CSSProperties
  template: React.ElementType
  context: React.Context<AlertContextType | null>
}

export interface AlertContextType {
  alerts: Alert[]
  show: (message: string, options?: Partial<AlertOptions>) => Alert
  remove: (alert: Alert) => void
  removeAll: () => void
  success: (message: string, options?: Partial<AlertOptions>) => Alert
  error: (message: string, options?: Partial<AlertOptions>) => Alert
  info: (message: string, options?: Partial<AlertOptions>) => Alert
}