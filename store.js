import { createStore } from "redux";
import countReducer from "./src/services/reducers/CountReducer";

const store = createStore(countReducer);

export default store;