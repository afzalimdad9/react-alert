import { useContext, useMemo } from 'react'
import DefaultContext from './Context'
import { AlertContextType } from './types'

const useAlert = (Context = DefaultContext): AlertContextType => {
  const alertContext = useContext(Context || DefaultContext)
  const alert = useMemo(() => {
    return alertContext!
  }, [alertContext])
  return alert
}

export default useAlert