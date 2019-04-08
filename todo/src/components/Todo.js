import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

class Todo extends React.Component {
    state = {
        newTodo: ""
    };

    render() {
        return (
            <>
                <div>
                    <h2>My Todo List</h2>
                    {this.props.todoList.map(task => (
                    <div key={task.id}>
                        <h4>
                            {task.todo}
                        </h4>
                    </div>
                    ))}
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder="What do I need to do..?"
                    />
                    <button>Add To List</button>
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