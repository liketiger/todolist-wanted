import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer