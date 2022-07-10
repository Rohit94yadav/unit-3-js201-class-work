import React, { useState } from 'react'
import { PostInput, IInput } from './PostInput';
import { PostList } from './PostList';

export const Post = () => {

    const [ posts, setPosts ] = useState<IInput[]>([]);

    var currentdate = new Date();

    var hrs = currentdate.getHours();
    var mins = currentdate.getMinutes();
    var secs = currentdate.getSeconds();

    var newHrs;
    if(hrs <= 9){
        newHrs = "0" + hrs
    }
    else {
        newHrs = hrs;
    }

    var newMins;
    if(mins <= 9){
        newMins = "0" + mins
    }
    else {
        newMins = mins;
    }

    var newSecs;
    if(secs <= 9){
        newSecs = "0" + secs
    }
    else {
        newSecs = secs;
    }

    let currentTime = ((hrs*60*60) + (mins*60) + secs)*1000;

    const handleSubmit = (payload: IInput )=>{
        const newPayload = [
            ...posts,
            {
                ...payload,
                time: `${currentTime}`,
                id: posts.length
            }
        ]

        setPosts(newPayload)
    }

    return (
        <div>
            <PostInput onSubmit={handleSubmit} />
            {
                posts.map(item=> <PostList {...item} curTime={currentTime} />)
            }
        </div>
    )
}
