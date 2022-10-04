import { createContext, useReducer } from 'react'

export const TutorialsContext = createContext()

export const tutorialsReducer = (state, action) => {

    console.log('state', state)
    console.log('action', action)
    debugger


  switch (action.type) {
    case 'SET_TUTORIALS': 
      return {
        tutorials: action.payload,
        tutorial: null
      }
    case 'CREATE_TUTORIAL':
      return {
        tutorials: [action.payload, ...state.tutorials],
        tutorial: null
      }
    case 'DELETE_TUTORIAL':
      return {
        state
      }
    case 'GET_TUTORIAL':
      return {
        state
      }
    case 'UPDATE_TUTORIAL':
      return {
        state
      }  
    default:
      return state
  }
}

export const TutorialsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tutorialsReducer, {
    tutorials: null,
    tutorial: null
  })

  return (
    <TutorialsContext.Provider value={{...state, dispatch}}>
      { children }
    </TutorialsContext.Provider>
  )
}