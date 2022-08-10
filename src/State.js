import React, { createContext, useReducer } from "react";

let AppContext = createContext('');

const initialState = {
    authState: false,
    access_token: '',
    users: [],
    userProfile: {}
}
let reducer = (state, action) => {
    switch (action.type) {
        case "setAuthState": {
            return {
                ...state,
                authState: action.payload.authState,
                access_token: action.payload.access_token
            }
        }
        case "USER_PROFILE": {
            return {
                ...state,
                userProfile: action.payload.profile,
            }
        }
        case "GET_USERS": {
            return {
                ...state,
                users: action.payload.users,
            }
        }
        case "DELETE_USER": {
            const newUserList = state.users.filter((item) => {
                if (item.id !== action.payload.delId) {
                    return item;
                } else {
                    return null;
                }
            });
            return {
                ...state,
                users: [...newUserList],
            };
        }
        case "UPDATE_USER": {
            let updatedUser = state.users.map((item) => {
                if (action.payload.user.id === item.id) {
                    return { ...action.payload.user}
                }
                else {
                    return item
                }

            })
            return {
                ...state,
                users: updatedUser,
            }
        }
    }
    return state;
};

function AppContextProvider(props) {
    const fullInitialState = {
        ...initialState,
    }

    let [
        state,
        dispatch
    ] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };


    return (
        <AppContext.Provider
            value={value}
        >
            {props.children}
        </AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export {
    AppContext,
    AppContextProvider,
    AppContextConsumer
};