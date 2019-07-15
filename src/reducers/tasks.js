import { ADD_TASK, TASK_FINISHED } from '../actions';

export const tasks = (state = [], {type, payload}) => {
    switch(type) {
        case ADD_TASK:
            let newTask = {
                id: payload.taskId,
                taskName: payload.name,
                finished: payload.finished
            }
            
            return {...state, [payload.taskId.toString()]: newTask };

        case TASK_FINISHED: {
            let task = state[payload.id];

            return {...state, [payload.id]: {
                ...task,
                finished: payload.finished
            }}
        }

        default:
            return state;
    }
}
