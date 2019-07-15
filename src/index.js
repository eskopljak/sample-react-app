import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

import { normalizeData } from './data_normalization.js';


import { getBoardsApiTemp } from './api';

let initialStateTest = {
    boards:  [
        {
          id: 1,
          name: "Your Card",
          lists: [
            {
              id: 1,
              listName: "Lista No.1",
              tasks: [
                {
                  id: 1,
                  taskName: "Task 1",
                  finished: false
                },
                {
                  id: 2,
                  taskName: "Task 2",
                  finished: true
                }
              ]
            },
            {
              id: 2,
              listName: "Lista No.2",
              tasks: [
                {
                  id: 3,
                  taskName: "Task 42",
                  finished: false
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Your Card AAAAAAAAAAAAAAAAAAAAAAAAAAa",
          lists: [
            {
              id: 3,
              listName: "Lista No.1",
              tasks: [
                {
                  id: 4,
                  taskName: "Task 1",
                  finished: false
                },
                {
                  id: 5,
                  taskName: "Task 2",
                  finished: true
                }
              ]
            },
            {
              id: 4,
              listName: "Lista No.2",
              tasks: [
                {
                  id: 6,
                  taskName: "Task 42",
                  finished: false
                }
              ]
            }
          ]
          
        },
        {
          id: 3,
          name: "C 11111111111 22222222222222222222222222222 3333333333333333333333333 4444444444444444444444444444444444444444 5555555555",
          lists: []
        },
        {
          id: 4,
          name: "DDDDDDD",
          lists: []
        },
        {
          id: 5,
          name: "EEEEEEE EEEEEEE EEEEEEE EEEEEEE EEEEEEE EEEEEEE EEEEEEE EEEEEEE EEEEEEE",
          lists: []
        },
        {
          id: 6,
          name: "FFFFf",
          lists: []
        },
        {
          id: 7,
          name: "GGGGGGGGGGGG",
          lists: []
        }
      ]
}

let initialState = {
  boards: [],
  lists: [],
  tasks: []
}
getBoardsApiTemp()
    .then((res) => {
      initialState = normalizeData(res.data);
    })
    .finally(() => {
        const allStoreEnhancers = compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )

        const store = createStore(
          allReducers,
          initialState,
          allStoreEnhancers
      );
      
      
      ReactDOM.render(
          <Provider store={store}>
              <App />
          </Provider>, 
          document.getElementById('root')
      );
      
      // If you want your app to work offline and load faster, you can change
      // unregister() to register() below. Note this comes with some pitfalls.
      // Learn more about service workers: https://bit.ly/CRA-PWA
      serviceWorker.unregister();
  })

//let normalizedData = normalizeData(initialStateTest);
