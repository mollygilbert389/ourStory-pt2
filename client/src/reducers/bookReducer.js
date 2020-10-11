import {
    SET_SENTENCE_DATA,
    // SAVE_USER_DATA,

  } from '../actions/constant'
  
  const initialState = {
      sentenceData: [],
      userData: {},
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
          default: 
              return state
      } 
  
  }