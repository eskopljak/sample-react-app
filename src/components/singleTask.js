import React, { Fragment } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import '../styles/singleTask.css'

export default function SingleTask(props) {
    const onClickTask = () => {
        props.onTaskFinished(!props.task.finished);
    }

    return (
        <Draggable draggableId={props.task.id} index={props.index} >
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className={`d-flex task my-2 ${props.task.finished ? "grayedOutDiv" : ""}`}>
                        <h3 className="m-auto taskText px-2" >{props.task.taskName}</h3>
                        <div className="m-auto taskText px-2 checkmarkOpacity" onClick={onClickTask}>
                            &#10003;
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
}
