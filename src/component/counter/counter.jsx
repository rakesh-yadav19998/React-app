
import React, { useState, useEffect, useRef } from "react";

const arrObj = [{
    name: 'This is the demo Data',
    age: 25,

    },
    {
        name: 'Apple',
        age: 25
    },
    {
        name: 'Save',
        age: 25
    },
    {
        name: 'orange',
        age: 30
    }

]

export const Counter = () => {
    const [count, setCount] = useState({
        counter: 0,
        title: ''
    });

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        console.log("counter is changed");
    }, [count.counter]);


    useEffect(() => {
        console.log("i am freshly mounted");
    }, [])


    const handleReset = (e) => {
        setCount((prevState) => {
            return {
                ...prevState,
                title: "x",
            }
        });
        console.log(e);
    }

    const registerCounter = (action) => () => {
        if (action === "decrement") {
            setCount((prevState) => {
                return {
                    ...prevState,
                    counter: prevState.counter - 1,
                }
            });
        }
        else {
            setCount((prevState) => {
                return {
                    ...prevState,
                    counter: prevState.counter + 1,
                }
            });
        }

    }

    return (
        <>

            {count.title && <h1>{count.title}</h1>}
            <p>{count.counter}</p>
            <button onClick={registerCounter("increment")}>Increment</button> &nbsp;
            <button onClick={registerCounter("decrement")}>Decrement</button> &nbsp;
            <button onClick={handleReset}>Reset</button>

            <div>{arrObj.map((item, index) => <p key={index}> {item.name}</p>)}</div>
        </>
    );

}
export default Counter



