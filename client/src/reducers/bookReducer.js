import {
    SET_SENTENCE_DATA,

  } from '../actions/constant'
  
  const initialState = {
      sentenceData: [] 
  }
  
  export default function(state = initialState, action) {
      switch(action.type) {
          case SET_SENTENCE_DATA: 
          return {
              ...state,
              sentenceData: action.payload  
            }
          default: 
              return state
      } 
  
  }