import { TutorialsContext } from '../context/TutorialsContext'
import { useContext } from 'react'

export const useTutorialsContext = () => {
  const context = useContext(TutorialsContext)

  if (!context) {
    throw Error('useTutorialsContext must be used inside an TutorialsContextProvider')
  }

  return context
}