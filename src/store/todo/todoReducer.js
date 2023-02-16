import { v4 } from "uuid";
export const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  DELETE: "DELETE",
  COMPLETED: "COMPLETED",
  DELETE_ALL: "DELETE_ALL",
  EDIT: "EDIT",
};

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload, id: v4(), completed: false },
        ],
      };

    case todoActionTypes.DELETE:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case todoActionTypes.COMPLETED:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };

    case todoActionTypes.EDIT:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, title: action.payload.value    };
          }
          return item;
        }),
      };

    case todoActionTypes.DELETE_ALL:
      return initialState;

    default:
      return state;
  }
};

export default todoReducer;
