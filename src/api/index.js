import axios from 'axios';

export const getBoardsApiTemp = () => {
    return axios.get('http://localhost:3001')
}

export const getBoardsApi = (onSuccess, onError) => {
    axios.get('http://localhost:3001')
        .then((res) => {
            onSuccess(res.data);
        })
        .catch((err) => {
            onError(err.message);
        });
}

export const addBoardApi = (name, onSuccess, onError) => {
    axios.post('http://localhost:3001/addBoard', {
        name: name
    })
        .then((res) => {
            onSuccess(res.data.id);
        })
        .catch((err) => {
            onError(err.message);
        });
}

export const addListApi = ({boardId, name}, onSuccess, onError) => {
    axios.post('http://localhost:3001/addList', {
        boardId: boardId,
        name: name
    })
        .then((res) => {
            onSuccess(res.data.id);
        })
        .catch((err) => {
            onError(err.message);
        });
}

export const addTaskApi = ({boardId, listId, name, finished}, onSuccess, onError) => {
    axios.post('http://localhost:3001/addTask', {
        boardId: boardId,
        listId: listId,
        name: name,
        finished: finished
    })
        .then((res) => {
            onSuccess(res.data.id);
        })
        .catch((err) => {
            onError(err.message);
        });
}

export const taskFinishedApi = ({taskId, finished}, onSuccess, onError) => {
    axios.post('http://localhost:3001/taskFinished', {
        taskId: taskId,
        finished: finished
    })
        .then((res) => {
            onSuccess();
        })
        .catch((err) => {
            onError(err.message);
        });
}

export const taskMoveApi = ({taskId, sourceListId, destListId, sourcePosition, destPosition}, onSuccess, onError) => {
    axios.post('http://localhost:3001/taskMove', {
        taskId: taskId,
        sourceListId: sourceListId,
        destListId: destListId,
        sourcePosition: sourcePosition,
        destPosition: destPosition
    })
        .then((res) => {
            onSuccess();
        })
        .catch((err) => {
            onError(err.message);
        });
}
