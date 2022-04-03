import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import initStore from './core/config/store';
import {Provider} from "react-redux";
import setupAxiosInterceptors from "./core/config/axios-interceptor";
import {bindActionCreators} from "redux";
import {clearAuthentication} from "./shared/reducers/user-reducer";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";

// Store initialize
const store = initStore;
const actions = bindActionCreators({ clearAuthentication}, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Route path="" exact component={ App }/>
            </BrowserRouter>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
