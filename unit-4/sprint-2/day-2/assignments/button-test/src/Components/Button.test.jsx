import { Button } from "./Button";
import { fireEvent, render, screen, userEvent } from '@testing-library/react';

describe("button component testing", function(){
    const btnTestId = 'buttonId';

    it("should render without any error", ()=>{
        const label = 'TESTING';
        render ( <Button label={label} />)

        const btn = screen.getByTestId(btnTestId);
        expect( btn.textContent ).toBe(label);
    })

    it("button should invoke the onClick prop", ()=>{
        const mockFn = jest.fn();
        const label = 'ADD';
        render( <Button label={label} onClick={mockFn} />)

        const btn = screen.getByTestId(btnTestId);

        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledTimes(3);
    })

    it("button should invoke the onHover prop", ()=>{
        const mockFn = jest.fn();
        const label = 'ADD';
        render( <Button label={label} onHover={mockFn} />)

        const btn = screen.getByTestId(btnTestId);

        fireEvent.mouseOver(btn);
        fireEvent.mouseOver(btn);
        fireEvent.mouseOver(btn);

        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toHaveBeenCalledTimes(3);
    })
});