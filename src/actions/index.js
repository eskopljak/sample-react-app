import { addBoardApi, addListApi, addTaskApi, taskFinishedApi, taskMoveApi } from '../api'

export const ADD_BOARD = "boards:addBoard";
export const ADD_LIST = "lists:addList";
export const ADD_TASK = "tasks:addTask";

export const SHOW_ERROR = "error";

export const TASK_FINISHED = "tasks:finished";
export const TASK_MOVE = "lists:taskMove";

export const showError = (errMsg) => {
    return {
        type: SHOW_ERROR,
        payload: errMsg
    }
}

export const addBoard = (id, name) => {
    return {
        type: ADD_BOARD,
        payload: {
            id: id,
            name: name
        }
    }
}

export const addBoardReq = (name) => {
    return dispatch => {
        let onSuccess = (id) => {
            dispatch(addBoard(id, name));
        }
        let onError = (errMsg) => {
            dispatch(showError(errMsg));
        }

        addBoardApi(name, onSuccess, onError);
    }
}

export const addList = (boardId, listId, name) => {
    return {
        type: ADD_LIST,
        payload: {
            boardId: boardId,
            listId: listId,
            name: name
        }
    }
}

export const addListReq = (boardId, name) => {
    return dispatch => {
        let onSuccess = (listId) => {
            dispatch(addList(boardId, listId, name));
        }
        let onError = (errMsg) => {
            dispatch(showError(errMsg));
        }

        addListApi({boardId, name}, onSuccess, onError);
    }
}

export const addTask = (boardId, listId, taskId, name, finished) => {
    return {
        type: ADD_TASK,
        payload: {
            boardId: boardId,
            listId: listId,
            taskId: taskId,
            name: name,
            finished: finished
        }
    }
}

export const addTaskReq = (boardId, listId, name, finished) => {
    return dispatch => {
        let onSuccess = (taskId) => {
            dispatch(addTask(boardId, listId, taskId, name, finished));
        }
        let onError = (errMsg) => {
            dispatch(showError(errMsg));
        }

        addTaskApi({boardId, listId, name, finished}, onSuccess, onError);
    }
}

export const taskFinished = (taskId, finished) => {
    return {
        type: TASK_FINISHED,
        payload: {
            id: taskId,
            finished: finished
        }
    }
}

export const taskFinishedReq = (taskId, finished) => {
    return dispatch => {
        let onSuccess = () => {
            dispatch(taskFinished(taskId, finished));
        }
        let onError = (errMsg) => {
            dispatch(showError(errMsg));
        }

        taskFinishedApi({taskId, finished}, onSuccess, onError);
    }
}

export const taskMove = (taskId, sourceListId, destListId, sourcePosition, destPosition) => {
    return {
        type: TASK_MOVE,
        payload: {
            taskId: taskId,
            sourceListId: sourceListId,
            destListId: destListId,
            sourcePosition: sourcePosition,
            destPosition: destPosition
        }
    }
}

export const taskMoveReq = (taskId, sourceListId, destListId, sourcePosition, destPosition) => {
    return dispatch => {
        let onSuccess = () => {
            dispatch(taskMove(taskId, sourceListId, destListId, sourcePosition, destPosition));
        }
        let onError = (errMsg) => {
            dispatch(showError(errMsg));
        }

        taskMoveApi({taskId, sourceListId, destListId, sourcePosition, destPosition}, onSuccess, onError);
    }
}