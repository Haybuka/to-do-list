import { createAction } from "@reduxjs/toolkit";


export const addTodo = createAction("addTodo")

export const removeTodo = createAction("removeTodo")

export const isLoading = createAction("isLoading")


