import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from "redux-mock-store";
import SignIn from "./SignIn";
import {Provider} from "react-redux";
import initStore from "../../core/config/store";
import userReducer from '../../shared/reducers/user-reducer'

const middlewares = []
const store = initStore;

test('render login component', () => {
    console.log('store ', store.getState);
    const component = render(<Provider store={store}>
        <SignIn />
    </Provider>);
    // const childElement = component.getByLabelText('Email');
    // expect(childElement).toBeInTheDocument();
});
