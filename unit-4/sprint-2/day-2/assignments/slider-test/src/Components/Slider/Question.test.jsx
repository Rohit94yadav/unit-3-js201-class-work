import { Question } from "./Question";
import { render, screen } from "@testing-library/react";

describe("question component tests", ()=>{
    it("should render without error", ()=>{
       render (  <Question /> )
    })

    it("data passed as props", ()=>{
        const testIds = {
            question: "slider-question",
            answer: "slider-answer"
        }
        const data = {
            question: "What js js?",
            answer: "JS is a programming language"
        }
        
        render ( <Question {...data} />)

        const question = screen.getByTestId(testIds.question);
        const answer = screen.getByTestId(testIds.answer);

        expect(question.textContent).toBe("What js js?");
        expect(answer.textContent).toBe("JS is a programming language");
    })
})