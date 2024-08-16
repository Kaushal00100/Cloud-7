import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
const store = configureStore({ reducer: rootReducer }, applyMiddleware)
export default store
