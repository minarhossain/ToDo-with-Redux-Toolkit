import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/state/todo/todoSlice';



const CreateTodo = () => {

    const dispatch = useDispatch();
    const taskInput = useRef()
    return (
        <div className="container">
            <div className="row">
                <div className="card-header mb-5">
                    <h2 className="text-center"> To Do App</h2>
                </div>
                <div className="col-md-10">
                    <input ref={taskInput} type="text" className="form-control" placeholder="Task Name" />
                </div>
                <div className="col-md-2">
                    <button onClick={() => dispatch(addTodo(taskInput.current.value))} className="btn btn-success"> Add ToDo</button>
                </div>
            </div>

        </div>
    );
};

export default CreateTodo;