/// <reference types="cypress" />

describe('Firecreek Test', () => {

	it('Test Scenario 1 : Login to system', () => {

		cy.visit('https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg')
		cy.screenshot('Login page')
		cy.get('#UserEmail').type('robot+tester_1@firecreekweb.com')
		cy.get('#UserPassword').type('Qwerty66#')
		cy.get('.submit > input').click()
		cy.wait(4000)
		cy.screenshot('Login success')

	})

	it('Test Scenario 2 : Add a property with a multiple rentable units', () => {

		cy.get('.alias-properties.dropdown > [data-left-menu-link="1"] > span').click()
		cy.wait(3000)
		cy.screenshot('Property page')
		//Unable to process displaying Account lock !!
	})
	it('Test scenario 3 : Add a task related to above property', () => {
		cy.get('.alias-tasks.dropdown > [data-left-menu-link="1"] > span').click()

		//Unable to process displaying Account lock !!
    })

})