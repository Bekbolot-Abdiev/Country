const countState = {
    count: 5,
  };
  
  //reducer  = (state, action)
  //action = (type, payload)
  const countReducer = (state = countState, action) => {
    if (action.type === "plus") {
      return { count: state.count + 1 };
    }
    switch (action.type) {
      case "minus":
        return { count: state.count - 1 };
  
      case "rest":
        return { count: (state.count = 0) };
        default:
    }
  
    return state;
  };

  export default countReducer