import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { 
    incrementNumber, 
    decrementNumber, 
} from "../store/counter/counter.action";

const Components = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Increment and Decrement Number App</h2>
            <button onClick={() => dispatch(incrementNumber(number))}>+</button>
            <h1>{number}</h1>
            <button onClick={() => dispatch(decrementNumber(number))}>-</button>
        </div>
    )
};

export default Components;