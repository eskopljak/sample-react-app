import { ADD_BOARD, ADD_LIST } from '../actions';

export const boards = (state = [], {type, payload}) => {
    switch(type) {
        case ADD_BOARD: {
            let newBoard = {
                id: payload.id,
                name: payload.name,
                lists: []
            }
            
            return {...state, [payload.id.toString()]: newBoard };
        }

        case ADD_LIST: {
            let board = state[payload.boardId.toString()];

            let newLists = Array.from(board.lists);
            newLists.push(payload.listId);

            return {...state, [payload.boardId.toString()]: {
                ...board,
                lists: newLists
            }}
        }
            
        default:
            return state
    }
}
