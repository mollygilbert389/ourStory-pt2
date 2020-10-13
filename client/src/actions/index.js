import {
    SET_SENTENCE_DATA,
    SET_IS_EDITING,

} from './constant' 

export const setSentenceData = (destination, value) => ({
    type: SET_SENTENCE_DATA,
    destination,
    value
})

export const setIsEditing = (destination, value) => ({
    type: SET_IS_EDITING,
    destination,
    value
})


