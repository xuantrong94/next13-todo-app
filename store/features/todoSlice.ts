import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  name: string;
  priority: 'high' | 'medium' | 'low';
  isDone: boolean;
};

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state = [...state, action.payload];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state = state.filter((todo) => todo.name !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state = state.map((todo) => {
        if (todo.name === action.payload.name) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
