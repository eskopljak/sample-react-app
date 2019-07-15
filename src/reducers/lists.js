import { ADD_LIST, ADD_TASK, TASK_MOVE } from '../actions';

export const lists = (state = [], {type, payload}) => {
    switch(type) {
        case ADD_LIST: {
            let newList = {
                id: payload.listId,
                listName: payload.name,
                tasks: []
            }
            
            return {...state, [payload.listId.toString()]: newList };
        }

        case ADD_TASK: {
            let list = state[payload.listId.toString()];

            let newTasks = Array.from(list.tasks);
            newTasks.push(payload.taskId);

            return {...state, [payload.listId.toString()]: {
                ...list,
                tasks: newTasks
            }}
        }

        case TASK_MOVE: {
            if (payload.sourceListId == payload.destListId) {
                let list = state[payload.sourceListId];
                let newTaskIds = Array.from(list.tasks);

                newTaskIds.splice(payload.sourcePosition, 1);
                newTaskIds.splice(payload.destPosition, 0, payload.taskId);

                return {
                    ...state,
                    [list.id]: {
                        ...list,
                        tasks: newTaskIds
                    }
                }
            }
            else {
                let sourceList = state[payload.sourceListId];
                let destList = state[payload.destListId];

                let newTaskIdsSource = Array.from(sourceList.tasks)
                let newTaskIdsDest = Array.from(destList.tasks)
    
                newTaskIdsSource.splice(payload.sourcePosition, 1);
                newTaskIdsDest.splice(payload.destPosition, 0, payload.taskId);

                return {
                    ...state, 
                    [payload.sourceListId]: {
                        ...sourceList,
                        tasks: newTaskIdsSource
                    },
                    [payload.destListId]: {
                        ...destList,
                        tasks: newTaskIdsDest
                    }
                }
            }
        }

        default:
            return state;
    }
}
