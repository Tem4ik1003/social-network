const SET_USER = 'SET-USER'
const ADD_FAVORITE_GROUP = 'ADD-FAVORITE-GROUP'
const ADD_NEW_POST = 'ADD-NEW-POST'

const initialState = {
    userName: '',
    friends: [],
    favoritePages: [],
    favoriteGroups: [],
    posts: [{
        id: 1,
        text: 'Всем привет, как у вас дела?'
    }]
}

export const userReducer  = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {...state, posts: [...state.posts, {id: state.posts.length + 1, text: action.text}]}
        default:
            return state
    }
}


export const setUserAC = (...args) => ({type: SET_USER, args})
export const addFavoriteGroupAC = (idGroup) => ({type: ADD_FAVORITE_GROUP, idGroup})
export const addNewPostAC = (text) => ({type: ADD_NEW_POST, text})