/// <reference types="cypress" />

describe('Firecreek Test', () => {

	it('Test Scenario 1 : Login to system', () => {

		cy.visit('https://staging.arthuronline.co.uk/login?X-MODE=QA-eW91LXdpbi1ub3RoaW5nCg')
		cy.get('#UserEmail').type('robot+tester_1@firecreekweb.com')
		cy.get('#UserPassword').type('Qwerty66#')
		cy.get('.submit > input').click()

	})

	it('Test Scenario 2 : Add a property with a multiple rentable units', () => {

		cy.get('.alias-properties.dropdown > [data-left-menu-link="1"] > span').click()
	})

})