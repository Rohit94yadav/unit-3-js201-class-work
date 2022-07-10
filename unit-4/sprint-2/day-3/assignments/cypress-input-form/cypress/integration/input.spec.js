describe("Input Testing",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("input form should autofocus", ()=>{
        cy.focused()
         .should('have.class', 'input-form')
    })

    it("type value in the input", ()=>{
        const text = "LEARN";
        
        cy.get(".input-form")
            .type(text)
            .should("have.value", text)
    })
})