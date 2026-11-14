# Carrinho

6 casos de teste. Todos automatizados em `automacao/tests` (o título do teste começa com o ID do caso).

## SDEMO-TC-14 · Validar inclusão de produto no carrinho pela lista de produtos

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Crítica | SDEMO-RQ-3 | Sim | — |

**Objetivo:** Conferir o botão Add to cart e o contador do carrinho.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica em "Add to cart" no produto | `Sauce Labs Backpack` | o botão muda para "Remove" e o carrinho mostra 1 |
| 2 | o usuário abre o carrinho |  | o carrinho lista "Sauce Labs Backpack" com quantidade 1 e preço $29.99 |

## SDEMO-TC-15 · Validar inclusão de todos os produtos no carrinho

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-3 | Sim | — |

**Objetivo:** Valor limite superior: os 6 produtos.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário adiciona os 6 produtos ao carrinho |  | o contador do carrinho mostra 6 |
| 2 | o usuário abre o carrinho |  | o carrinho lista os 6 produtos |

## SDEMO-TC-16 · Validar remoção de produto do carrinho pela lista de produtos

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-3 | Sim | — |

**Objetivo:** Conferir o botão Remove na lista.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário adiciona o produto ao carrinho | `Sauce Labs Bike Light` | o contador mostra 1 |
| 2 | o usuário clica em "Remove" no mesmo produto |  | o botão volta para "Add to cart" e o contador deixa de ser exibido |

## SDEMO-TC-17 · Validar remoção de produto dentro da página do carrinho

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-3 | Sim | — |

**Objetivo:** Conferir a remoção na página do carrinho.

**Dado** que o usuário está logado com "standard_user"

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário adiciona dois produtos e abre o carrinho | `Sauce Labs Backpack e Sauce Labs Bike Light` | o carrinho lista 2 produtos |
| 2 | o usuário clica em "Remove" no "Sauce Labs Bike Light" |  | apenas o "Sauce Labs Backpack" continua no carrinho e o contador mostra 1 |

## SDEMO-TC-18 · Validar que "Continue Shopping" volta aos produtos mantendo o carrinho

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Baixa | SDEMO-RQ-3 | Sim | — |

**Objetivo:** Os itens devem continuar no carrinho.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário clica em "Continue Shopping" no carrinho |  | o sistema exibe a lista de produtos e o contador continua 1 |

## SDEMO-TC-19 · Validar que o carrinho é mantido após recarregar a página

| Prioridade | Requisito | Regressão | Defeito |
|---|---|---|---|
| Média | SDEMO-RQ-3 | Sim | — |

**Objetivo:** O carrinho fica salvo no navegador.

**Dado** que o usuário está logado com "standard_user" **e** que o produto "Sauce Labs Backpack" está no carrinho

| # | Ação | Dados | Resultado esperado |
|---|---|---|---|
| 1 | o usuário recarrega a página (F5) |  | o contador continua 1 e o botão do produto continua "Remove" |
