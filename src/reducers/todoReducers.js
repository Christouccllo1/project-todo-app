const initialData = {
    Todos: []
}

const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, data } = action.payload;

            return {
                ...state,
                Todos: [...state.Todos,
                    {
                        id: id,
                        Task: data,
                        statusType: "all"
                    }

                ]
            }
        case "SET_TODOS":
            const { todos } = action.payload
            return {
                ...state,
                Todos: todos
            }

        case "DELETE_TODO":
            const newTodos = state.Todos.filter((el) => el.id !== action.id)

            return {
                ...state,
                Todos: newTodos
            }
        default:
            return (state)
    }
}


export default todoReducers