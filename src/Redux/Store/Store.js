import {configureStore} from "@reduxjs/toolkit";
import counting from "../State/SliceCounter";


export default configureStore({
    reducer:{
        count:counting
    }
})