import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import SignIn from "./SignIn";
import createTheme from "@mui/material/styles/createTheme";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import userEvent from "@testing-library/user-event";
import userReducer from '../../shared/reducers/user-reducer';
import {combineReducers, createStore} from "redux";
import localeReducer from '../../shared/reducers/locale.reducer';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const ThemeApp = createTheme({
    palette: {
        mode: 'light',
        neutral: {
            main: 'rgb(63 63 64)',
            contrastText: '#fff',
        },
    },
});

const store = createStore(
    combineReducers({
        user: userReducer,
        locale: localeReducer
    })
);

// const store: any = mockStore({
//     user: {
//         isAuthenticated: false,
//         nbeNotificationsNotRead: 0,
//         nbeMessagesNotRead: 0,
//         oneSignalId: 'azerty',
//         currentUser: {}
//     },
//     locale: {
//         currentLocale: 'fr'
//     }
// });

describe("Test SignIn Component", () => {



    test('render login component', async () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <SignIn />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        const buttonList = await screen.findAllByRole('button');
        expect(buttonList).toHaveLength(3);

    });

    test('Email should be accept only email format', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <SignIn />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        // Valid email
        const email = screen.getByTestId('email') as HTMLInputElement;
        userEvent.type(email, "test");
        expect(email.value).not.toMatch('test@gmail.com');
    });


    test('Password should have the password type', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <SignIn />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        // Valid password
        const password = screen.getByTestId('password') as HTMLInputElement;
        expect(password).toHaveAttribute('type', 'password');
    });


    test('Should be able to submit form', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <SignIn />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        const submitBtn = screen.getByTestId('submit') as HTMLButtonElement;
        const email = screen.getByTestId('email') as HTMLInputElement;
        const password = screen.getByTestId('password') as HTMLInputElement;

        fireEvent.click(submitBtn);
    });
})
