
import { useSelector } from 'react-redux';
import { TodoDeleteAlert } from './TodoDeleteAlert';
import { TodoEditAlert } from './TodoEditAlert';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const TodoList = () => {
    const todoItems = useSelector(state => state.todo.value);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item, i) => {
                                    return (
                                        <tr key={i.toString()}>
                                            <td> <input type="checkbox" /> <span>Task {i}</span></td>
                                            <td>{item}</td>
                                            <td><button onClick={() => { TodoEditAlert(i, item) }} className="btn btn-sm btn-success">Edit <AiOutlineEdit /></button></td>
                                            <td><button onClick={() => { TodoDeleteAlert(i) }} className="btn btn-sm btn-danger">
                                                Delete <AiFillDelete /></button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TodoList;