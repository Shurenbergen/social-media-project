const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogs: [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Evgeniy'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Aleksey'},
        {id: 6, name: 'Konstantine'}

    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello friend how is you Relay defend ?'},
        {id: 3, message: 'Hi beach'},
        {id: 4, message: 'HELLO SUZUN!'},
        {id: 5, message: 'good morning bitches!'},
        {id: 6, message: 'Why you so slowly?'}

    ]
};
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
               case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
             messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;