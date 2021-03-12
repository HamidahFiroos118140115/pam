import { INCREMENT, DECREMENT } from "./counter.action.type";

export const incrementNumber = (number) => {
    return {
        type: INCREMENT,
        data: number + 1,
    };
};
export const decrementNumber = (number) => {
    return {
        type: DECREMENT,
        data: number - 1,
    };
};