import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe ("test for counter app", function(){
    const testIds = {
        label: 'counter-label',
        value: 'counter-value',
        button: 'buttonId'
    }

    it("should render without any error", ()=>{
        render ( <Counter />)
    })

    it("shgould have ADD and REDUCE buttons", ()=>{
        render ( <Counter /> )

        const btn = screen.getAllByTestId(testIds.button);
        const [ add, reduce ] = btn;

        expect( add.textContent ).toBe("ADD");
        expect( reduce.textContent ).toBe("REDUCE");
    })

    it ("should increment by 5 onClick ADD", ()=>{
        const factor = 5;
        render ( <Counter factor={factor} /> )

        const value = screen.getByTestId(testIds.value);
        const btn = screen.getAllByTestId(testIds.button);
        const [ add, reduce ] = btn;

        fireEvent.click(add);
        fireEvent.click(add);
        fireEvent.click(add);

        expect( value.textContent ).toBe('15');
    })

    it ("should check for the default value", ()=>{
        render ( <Counter /> )

        const value = screen.getByTestId(testIds.value);
        
        expect( value.textContent ).toBe("0");
    })

    it ("should decrement by 5 onClick REDUCE", ()=>{
        const factor = 5;
        render ( <Counter factor={factor} /> )

        const value = screen.getByTestId(testIds.value);
        const btn = screen.getAllByTestId(testIds.button);
        const [ add, reduce ] = btn;

        fireEvent.click(reduce);
        fireEvent.click(reduce);
        fireEvent.click(reduce);

        expect( value.textContent ).toBe('-15');
    })
})