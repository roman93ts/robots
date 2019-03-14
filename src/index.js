import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'; //nice way to log actions into the console 
import thunkMiddleware from 'redux-thunk'; // looking what action will return a function instead of an object (fetch for example)
import {searchRobots, requestRobots} from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); //thhunkMiddleware,logger

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>
				, document.getElementById('root'));


serviceWorker.register();
