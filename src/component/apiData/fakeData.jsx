import React, { useEffect, useState }  from "react";

import axios from "axios";


export function FakeData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data)

        })
    }, [])
 

    return (
       <div>
            <h1> Fake API Data By Axios</h1>
            <div>
            
                {data.map((item, index) => {
                    return <p key= {index}>{item.id}</p>
                })}
            </div>
       </div>
    )
}
export default FakeData