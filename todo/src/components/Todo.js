import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

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

    render() {
        return (
            <>
                <div>
                    <h2>My Todo List</h2>
                    {this.props.todoList.map(task => (
                    <div key={task.id}>
                        <h4 onClick={() => this.toggleCompleted(task.id)}
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        >
                            {task.todo}
                        </h4>
                    </div>
                    ))}
                </div>
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
    { addTodo, toggleCompleted }
)(Todo);