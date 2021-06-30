import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It`s my first post.', likesCount: 11},
                {id: 3, message: 'Blablas.', likesCount: 11},
                {id: 4, message: 'Draught post.', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
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

            ],
newMessageBody:""
        },

sidebar: {}
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);





    }
}


export default store;
window.store = store;
