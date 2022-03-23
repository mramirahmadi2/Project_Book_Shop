import { createStore } from "redux";
import {MainReducer} from  "./Main.reducer";


const store = createStore(MainReducer);


export default store;
