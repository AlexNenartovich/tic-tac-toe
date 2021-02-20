import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./Actions";

function Redux() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
        return (
            <div>
                <h2>Counter {counter}</h2>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                {isLogged ? <h2>Valuable information I shoudn't see</h2> : ""}
            </div>
        )
}

export default Redux;
