import { fireEvent, render, screen } from '@testing-library/react';
import { PostList } from './PostList';

describe("PostList Component test", ()=>{
    const testIds = {
        bodyList: "body-list",
        emailList: "email-list",
        timeList: "time-list"
    }

    it("render without errors", ()=>{
        let props = {
            body: 'hello',
            email: 'abc@gmail.com',
            time: '56000',
            curTime: "98000"
        }
        render( <PostList {...props} />)
    })

    it("time = 56000 and curTime= 60000, should give timeStamp as posted 4 seconds ago", ()=>{
        let props = {
            body: 'hello',
            email: 'abc@gmail.com',
            time: '56000',
            curTime: "60000"
        }
        render( <PostList {...props} /> )
        const timeStamp = screen.getByTestId(testIds.timeList);

        expect(timeStamp.textContent).toBe('posted 4 seconds ago')
    })

    it("time = 56000 and curTime= 1570000, should give timeStamp as posted 4 seconds ago", ()=>{
        let props = {
            body: 'hello',
            email: 'abc@gmail.com',
            time: '56000',
            curTime: "157000"
        }
        render( <PostList {...props} /> )
        const timeStamp = screen.getByTestId(testIds.timeList);

        expect(timeStamp.textContent).toBe('posted 1 minutes 41 seconds ago')
    })
})