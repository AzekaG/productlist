import { type } from "@testing-library/user-event/dist/type";
import { nanoid } from "nanoid";
//идем от плана , какой функционал будет у задач.
export const ProductReducer = (state, action) => {

    switch (action.type) {
        case 'create':
            return [...state, {
                id: nanoid(),
                title: action.payload,
                done: false
            }]
            break;
        // action.payload : id
        case 'remove':
            return state.filter(item => item.id !== action.payload);
        // action.payload :  {id , title}
        case 'update':
            return state.map((task) => {
                return task.id === action.payload.id ? { ...task, title: action.payload.title } : task
            });
        //state
        case 'removeAll':
            return [];
        //action.payload = id
        case 'changeDone':
            return state.map((task) => {
                return task.id === action.payload ? { ...task, done: !task.done } : task;
            });
        case 'restore':
            console.log("restore : " + typeof (action.payload))
            return action.payload;
        default:
            return state;
    }
    return state;
}