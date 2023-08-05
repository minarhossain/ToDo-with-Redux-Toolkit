

import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';


const TodoPage = () => {
    return (
        <div className='container bg-info mt-5'>
            <div className="row">
                <div className="col-12">
                    <div className="card">

                        <div className="card-body">
                            <CreateTodo />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodoPage;