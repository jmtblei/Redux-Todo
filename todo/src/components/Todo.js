import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted, deleteTodo, clearCompleted } from '../actions';

class Todo extends React.Component {
    state = {
        newTodo: ""
    };

    handleChange = e => {
        this.setState({ newTodo: e.target.value });
    };
    
    addTodoToList = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        console.log(this.state.newTodo);
        this.setState({ newTodo: "" });
    };
    
    toggleCompleted = id => {
        this.props.toggleCompleted(id);
    };

    deleteTodo = id => {
        this.props.deleteTodo(id);
    };

    clearCompleted = completed => {
        this.props.clearCompleted(completed);
    };

    render() {
        return (
            <>
                <div className="todo-list">
                    <h2>My Todo List</h2>
                    <div>
                        <input 
                        type="text"
                        placeholder="What do I need to do..?"
                        name="newTodo"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                        />
                        <button onClick={this.addTodoToList}>Add To List</button>
                    </div>
                    {this.props.todoList.map(task => (
                    <div className="todo-item"
                        key={task.id}>
                        <button onClick={() => this.clearCompleted(task.completed)}>Clear Completed</button>
                        <input 
                            type="checkbox"
                            onChange={() => this.toggleCompleted(task.id)}
                            // style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        />
                            <h4>{task.todo}</h4>
                        {/* </h4> */}
                        <button onClick={() => this.deleteTodo(task.id)}>Remove</button>
                    </div>
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.thingsTodo
    }
}

export default connect(
    mapStateToProps,
    { addTodo, toggleCompleted, deleteTodo, clearCompleted }
)(Todo);