// src/store/index.ts

import { createStore } from "redux";
import counterReducer from "./redux/reducer/modalReducer";

const store = createStore(counterReducer);

export default store;
