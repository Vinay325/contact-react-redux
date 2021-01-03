import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from './constant'

//actions
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
})

// edit action

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id,
})

// update action
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})
// Delete contact 
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})
