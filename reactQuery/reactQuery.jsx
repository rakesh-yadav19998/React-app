import React   from "react";
import { useQuery } from "react-query";
import axios from "axios";


export function ReactQuery() {
    const {isLoading,  data } = useQuery('queryList', ()=> {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    })
   
    if (isLoading){
        return (
            <h4>Data Loading...</h4>
        )
    }
    console.log(data);
    return (
       <div>
            <h1>UseQuery</h1>
            {data.data.map((item, index) => {
                    return <p key= {index}>{item.title}</p>
                })}
       </div>
    )
}
export default ReactQuery