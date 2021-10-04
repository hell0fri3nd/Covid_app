import React from 'react';
import HomePage from '../view/HomePage'
import GraphPage from '../view/GraphPage'
import TablePage from '../view/TablePage'

export const initialState = {currentComponent: <HomePage/>}
/***
 * Returns the right component in the state hooked with useReducer based on the choice of the buttons
 * @param state
 * @param action
 * @returns {{currentComponent: *}|*}
 * @constructor
 */
export default function MenuReducer(state, action) {

    switch (action.type) {
        case 'Home':
            return {currentComponent: <HomePage/>};
        case 'Charts':
            return {currentComponent: <GraphPage/>};
        case 'Tables':
            return {currentComponent: <TablePage/>};
        default:
            return initialState.currentComponent;
    }
}
