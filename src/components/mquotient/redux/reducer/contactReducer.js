import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../action/constant'

const initialState = {
    contactsList: [
        {
            "id": 1,
            "name": "Vinay Kumar",
            "email": "testvinay@test.com",
            "phone": "11x21xxx111"
        },
        {
            "id": 2,
            "name": "Rahul BK",
            "email": "rahulbk@test.com",
            "phone": "999999xx01"
        },
        {
            "id": 3,
            "name": "Vipin",
            "email": "vipin@test.com",
            "phone": "7899x000xx"
        },
        {
            "id": 4,
            "name": "Tuhina",
            "email": "tuhina@kory.org",
            "phone": "001110001212"
        },
        {
            "id": 5,
            "name": "Divya",
            "email": "divyaa@kory.org",
            "phone": "49179623x156"
        },
        {
            "id": 6,
            "name": "Vino",
            "email": "vino@kory.com",
            "phone": "293xxx11101"
        },
        {
            "id": 7,
            "name": "Sunil",
            "email": "sunil@test.com",
            "phone": "8x8998x1111"
        }
    ],
    contact: null
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contactsList: [action.payload, ...state.contactsList]
            };
        case GET_CONTACT:
            let arr = state.contactsList.filter((contact) => contact.id == action.payload);
            arr = arr.values()
            for (let val of arr) {
                arr = val
            }
            return {
                ...state,
                contact: arr
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contactsList: state.contactsList.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                )
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contactsList: state.contactsList.filter((contact) => contact.id !== action.payload)
            }
        default:
            return state;
    }
}
