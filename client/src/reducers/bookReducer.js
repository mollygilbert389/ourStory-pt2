import {
    SET_SENTENCE_DATA,
    SET_IS_EDITING,

  } from '../actions/constant'
  
  const initialState = {
      sentenceData: [],
      userData: {},
      isEditing: false,
  }
  
  export default function(state = initialState, action) {
      switch(action.type) {
          case SET_SENTENCE_DATA: 
          return {
              ...state,
              sentenceData: action.payload  
            }
            case "SAVE_USER_DATA": 
            return {
                ...state,
                userData: action.user  
              }
              case SET_IS_EDITING: 
              return {
                  ...state,
                  [action.destination]: action.value
                }
          default: 
              return state
      } 
  
  }