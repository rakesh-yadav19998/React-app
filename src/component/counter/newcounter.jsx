import React, { useState, useRef, useLayoutEffect } from "react";

export const ComponentDidUpdateFunction = () => {
    const [count, setCount] = useState(0);

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        console.log("componentDidUpdateFunction");
    });

    return (
        <div>
            <p>componentDidUpdateFunction: {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click Me
            </button>
        </div>
    );
}

