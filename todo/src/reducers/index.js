import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    title:'My Todo List',
    thingsTodo: [
        {
            todo: 'Feed Cat',
            completed: false,
            id: 1231231123123
        },
        {
            todo: 'Make Dinner',
            completed: false,
            id: 1212121212122
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newthingsTodo = {
                todo: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                thingsTodo: [...state.thingsTodo, newthingsTodo]
            };
        case TOGGLE_COMPLETED:
            return {
                ...state,
                thingsTodo: state.thingsTodo.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                    )
            };
        default:
            return state;
    }
}

export default reducer;