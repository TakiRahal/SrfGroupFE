import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import createTheme from "@mui/material/styles/createTheme";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import userEvent from "@testing-library/user-event";
import userReducer from '../../shared/reducers/user-reducer';
import {combineReducers, createStore} from "redux";
import localeReducer from '../../shared/reducers/locale.reducer';
import ForgotPassword from './ForgotPassword';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

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

describe("Test ForgotPassword Component", () => {

    test('render ForgotPassword component', async () => {

        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <ForgotPassword />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        const srfTitle = component.getByText("SRF");
        const srfTitleForgotPassword = component.getAllByText("signin.title_page_forgot_password");
        expect(srfTitle).toBeTruthy()
        expect(srfTitleForgotPassword).toBeTruthy();

    });

    test('Email should be accept only email format', async () => {

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={ThemeApp}>
                        <ForgotPassword/>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>);

        // Valid email
        const email = screen?.getByTestId('email') as HTMLInputElement;
        const errorMessage = screen?.getByTestId('error-msg') as HTMLInputElement;
        userEvent.type(email, 'test@test.tn');
        expect(email).toHaveValue('test@test.tn');
        expect(email.value).not.toMatch('test@gmail.com');
        expect(errorMessage).toBeInTheDocument();

    });


    // test('Password should have the password type', async () => {
    //     render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <ThemeProvider theme={ThemeApp}>
    //                     <SignIn />
    //                 </ThemeProvider>
    //             </BrowserRouter>
    //         </Provider>);
    //
    //     // Valid password
    //     const password = screen.getByTestId('password') as HTMLInputElement;
    //     expect(password).toHaveAttribute('type', 'password');
    // });
    //
    //
    // test('Should be able to submit form', async () => {
    //     render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <ThemeProvider theme={ThemeApp}>
    //                     <SignIn />
    //                 </ThemeProvider>
    //             </BrowserRouter>
    //         </Provider>);
    //
    //     const submitBtn = screen.getByTestId('submit') as HTMLButtonElement;
    //     const email = screen.getByTestId('email') as HTMLInputElement;
    //     const password = screen.getByTestId('password') as HTMLInputElement;
    //
    //     fireEvent.click(submitBtn);
    // });
})
