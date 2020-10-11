import {
    SET_SENTENCE_DATA,

} from './constant' 

export const setSentenceData = (destination, value) => ({
    type: SET_SENTENCE_DATA,
    destination,
    value
})

