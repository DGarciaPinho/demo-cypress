describe('Teste End-to-End', () => {
  it('Teste 1: Visita Página', () => {
    // abre o site
    cy.visit('http://localhost:5000/')
  })

  it('Teste 2: Verifica item na página', () => {
    // verifica se existe o livro desejado
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
  })

  it('Teste 3: Calcula Frete', () => {
    // calcula o frete
    cy.get('[data-id=3]').within(() => {
      cy.get('input').type('10000-000')
      cy.contains('Calcular Frete').click()
      cy.wait(2000)
    })
    cy.get('.swal-text').contains('O frete é: R$')

    // fecha o pop-up com o preço do frete
    cy.get('.swal-button').click()
  })

  // Tarefa 2: simula a compra do livro
  it('Teste 4: Compra o livro', () => {
    // clica no botão Comprar do livro Design Patterns
    cy.get('[data-id=3]').within(() => {
      cy.contains('Comprar').click()
    })

    // espera o pop-up de confirmação
    cy.wait(2000)

    // verifica a mensagem de sucesso
    cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')

    // fecha o pop-up
    cy.get('.swal-button').click()
  })
})
