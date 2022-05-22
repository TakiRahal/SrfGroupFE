import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


test('renders App', () => {
    const store = mockStore({
        user: {
            isAuthenticated: false,
            nbeNotificationsNotRead: 0,
            nbeMessagesNotRead: 0,
            oneSignalId: 'azerty',
            currentUser: {}
        },
        locale: {
            currentLocale: 'fr'
        },
        address: {
            loadingEntities: false,
            entities: []
        },
        newsLetter: {
            loadingEntity: false,
            addSuccess: false
        },
        webSocketState: {
            listConnectedUsers: []
        }
    })
    const component = render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>);

    const textProject = screen.getAllByText(/SRF/i);
    expect(textProject.length).toBeGreaterThan(0); // Array of  HTMLElement
    // const divScrollTop = component.getByTestId('back-to-top-anchor')
});
