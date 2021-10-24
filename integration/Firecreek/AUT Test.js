/// <reference types="cypress" />

describe('Firecreek Test', () => {

	beforeEach('Test Scenario 1 : Login to system', () => {

		cy.viewport(1920, 1080)
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
		cy.get('.detail > .actions > :nth-child(1) > :nth-child(1) > .btn').click()
		cy.get('.noselect.multiple-unit > .arthur-icon').click()
		cy.get('#ProfileAddressName').type('Test Add Porp1')
		cy.get('#s2id_PropertyOwnerId > .select2-choice > div > b').click()
		cy.get(':nth-child(2) > .select2-result-label').click()
		cy.get('#ProfileAddress1').type('Soi Phatthanakan 30')
		cy.get('#ProfileAddress2').type('Khwaeng Suan Luang, Suan Luang')
		cy.get('#ProfilePostcode').type('10250')
		cy.get('#ProfileCity').type('Bnagkok')
		cy.get('#ProfileCountryId').select('Thailand')
		cy.get('#PropertyFullAccess').check().should('be.checked')
		cy.get('#PropertyUnitCount').type('5')
		cy.get('.next-page').click()
		cy.get('#s2id_PrefixUnitUnitManagerManagerPersonId > .select2-choice > div > b').click()
		cy.get('.select2-highlighted > .select2-result-label').click()
		cy.get('#s2id_PrefixUnitUnitAgentEntityId > .select2-choice > div > b').click()
		cy.get(':nth-child(2) > .select2-result-label').click()
		cy.get('.btn-setting > .btn').click()
		cy.wait(3000)
		cy.get('.next > .submit').click()
		cy.wait(5000)
		cy.get('.children > .alias-properties > a > span').click()
		cy.wait(3000)
		cy.get('#_q').type('Test Add Porp1')
		cy.get('.submit > .btn').click()
		cy.wait(10000)
		cy.get(':nth-child(1) > .name > .table-info > a').should('have.text','Test Add Porp1')
	})
//	it('Test scenario 3 : Add a task related to above property', () => {
//		cy.get('.alias-tasks.dropdown > [data-left-menu-link="1"] > span').click()

		//Unable to process displaying Account lock !!
 //   })

})