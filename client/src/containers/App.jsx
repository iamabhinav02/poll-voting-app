import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import decode from 'jwt-decode';
// import api from '../services/api';
import RouteViews from './RouteViews';
import NavBar from './NavBar';
import {store} from '../store';
import {setCurrentUser, addError, setToken} from '../store/actions';

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    } catch(err) {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App = () => (
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <NavBar />
                <RouteViews />
            </React.Fragment>
        </Router>
    </Provider>
)

export default App;