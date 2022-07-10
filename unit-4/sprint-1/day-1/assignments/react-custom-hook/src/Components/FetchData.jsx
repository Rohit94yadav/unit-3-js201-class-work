import React from 'react';
import { useFetch } from '../CustomHooks/useFetch';

export const FetchData = () => {

    const {data, isLoading, isError } = useFetch({
        url: "https://json-kartik.herokuapp.com/posts"
    })
    console.log(data)
    
    return (
        <div>
            {
                data?.map(item=> <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>)
            }
        </div>
    )
}
