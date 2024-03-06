const todoState = {
  todoData: [
    { title: "Go to gym", id: 1 },
    { title: "Have a driver", id: 2 },
  ],
};

const todoReducer = (state = todoState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "addTodo":
      return {
        todoData: [...state.todoData, payload],
      };
    
    case "delTodo": {
        return {
            todoData: state.todoData.filter(el => el.id!== payload)
        }
    }  
    default:
      return state;
  }
};

export default todoReducer;
