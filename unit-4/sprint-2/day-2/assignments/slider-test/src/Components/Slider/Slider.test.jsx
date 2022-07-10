import { fireEvent, render, screen } from '@testing-library/react';
import { Slider } from './Slider';

describe("slider component test", function(){

    const testIds = {
        button: 'buttonId',
        queNo: 'slider-question-number'
    }
    
    it("should render wihtout nay error",()=>{
        render( <Slider />)
    })

    it("should have next and prev button",()=>{
        render( <Slider />)

        const btn = screen.getAllByTestId(testIds.button);
        const [prev, next] = btn;

        expect(prev.textContent).toBe("Prev");
        expect(next.textContent).toBe("Next");
    })

    it("change question number onClick next and prev",()=>{
        render( <Slider />)

        const queNo = screen.getByTestId(testIds.queNo);
        const btn = screen.getAllByTestId(testIds.button);
        const [prev, next] = btn;

        fireEvent.click(next);
        fireEvent.click(next);
        fireEvent.click(next);

        expect( queNo.textContent ).toBe('4');

        fireEvent.click(prev);
        fireEvent.click(prev);

        expect( queNo.textContent ).toBe('2');
    })

    it("prev button disabled when question = 1", ()=>{
        render ( <Slider /> )

        const btn = screen.getAllByTestId(testIds.button);
        const [prev, next] = btn;
        
        expect( prev.disabled ).toBe(true);
    })

    it("next button disabled when question = last question", ()=>{
        render ( <Slider quNo={4} /> )

        const btn = screen.getAllByTestId(testIds.button);
        const [prev, next] = btn;
        
        expect( next.disabled ).toBe(true);
    })
})